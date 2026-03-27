# Lab 9.2: Mediator & Command Pattern
**Student:** Kabylbek Zhantore
**Date:** 15.03.2026

## Pattern Overview
- **Mediator (`HomeMediator`)**: Centralizes logic. Instead of the Security System talking directly to the Light, it notifies the Mediator, which triggers automation rules.
- **Command (`CommandManager`)**: Encapsulates actions (like turning on a light) into objects. This enables the implementation of `undo()` and `redo()` stacks.