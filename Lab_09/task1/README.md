# Lab 9.1: Observer & Pub/Sub Pattern
**Student:** Kabylbek Zhantore
**Date:** 15.03.2026

## Pattern Overview
This task implements the Pub/Sub pattern via an `EventBus`. It completely decouples the `NewsPublisher` from subscribers (`EmailNotifier`, `PushNotifier`, `DashboardWidget`). 
- **Memory Management**: Unsubscribe functions are returned from the `subscribe` method to prevent memory leaks in long-running applications.