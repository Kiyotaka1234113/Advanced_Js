import ConfigManager from "./singleton.js";

const instance1 = ConfigManager.getInstance();
const instance2 = ConfigManager.getInstance();

console.log("Same instance:", instance1 === instance2);

instance1.set("appName", "MyCoolApp");

console.log("From instance2:", instance2.get("appName"));

const instance3 = new ConfigManager();
console.log("New still same:", instance1 === instance3);