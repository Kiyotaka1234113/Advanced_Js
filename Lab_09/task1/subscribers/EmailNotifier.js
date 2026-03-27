import eventBus from "../pubsub/EventBus.js";
export class EmailNotifier {
  constructor(email) {
    this.email = email;
    this.subscriptions = [];
  }
  subscribe(categories) {
    categories.forEach(category => {
      this.subscriptions.push(eventBus.subscribe(`news:${category}`, (article) => {
        console.log(`[Email -> ${this.email}] Subject: ${article.headline}`);
      }));
    });
  }
  unsubscribe() {
    this.subscriptions.forEach(unsub => unsub());
    this.subscriptions = [];
  }
}