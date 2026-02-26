import { NotificationFactory } from "./NotificationFactory.js";

function sendNotification(type, options, message) {
    try {
        const notification = NotificationFactory.create(type, options);
        return notification.send(message);
    } catch (error) {
        console.error("Failed:", error.message);
        return { success: false };
    }
}

sendNotification("email",
    { to: "user@test.com", subject: "Hello" },
    "Welcome!"
);

sendNotification("sms",
    { to: "+777777777" },
    "Your code is 1234"
);

sendNotification("push",
    { deviceToken: "abc123", title: "Alert" },
    "You got notification"
);