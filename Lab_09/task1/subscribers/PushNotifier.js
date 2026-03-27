import eventBus from "../pubsub/EventBus.js";
export class PushNotifier {
  constructor(device) {
    this.device = device;
    this.unsub = eventBus.subscribe("news:urgent", (article) => {
      console.log(`[PUSH -> ${this.device}] URGENT: ${article.headline}`);
    });
  }
  unsubscribe() { if(this.unsub) this.unsub(); }
}