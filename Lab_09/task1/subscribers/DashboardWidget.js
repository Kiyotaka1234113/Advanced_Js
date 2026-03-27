import eventBus from "../pubsub/EventBus.js";
export class DashboardWidget {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.unsub = eventBus.subscribe("news:all", (article) => {
      this.element.innerHTML += `<div>[${article.category}] ${article.headline}</div>`;
    });
  }
  unsubscribe() { if(this.unsub) this.unsub(); }
}