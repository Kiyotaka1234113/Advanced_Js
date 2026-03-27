import { Device } from "./Device.js";
export class Thermostat extends Device {
  constructor(name) { super(name, "thermostat"); }
  getDefaultState() { return { temp: 22 }; }
  setTemp(t) { this.updateState({ temp: t }); console.log(`[Thermostat] ${this.name} temp set to ${t}`); }
}