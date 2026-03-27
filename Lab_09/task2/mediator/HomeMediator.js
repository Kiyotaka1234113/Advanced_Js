import eventBus from "../../task1/pubsub/EventBus.js"; 
export class HomeMediator {
  constructor() {
    this.devices = new Map();
    this.rules = [];
  }
  registerDevice(device) {
    this.devices.set(device.name, device);
    device.setMediator(this);
  }
  notify(sender, changedProperty) {
    console.log(`[Mediator] ${sender.name} changed:`, changedProperty);
    eventBus.publish("device:change", { device: sender.name, state: changedProperty });
    this.rules.forEach(rule => {
      if (rule.condition(sender, changedProperty)) rule.action(this.devices);
    });
  }
  addRule(condition, action) { this.rules.push({ condition, action }); }
}