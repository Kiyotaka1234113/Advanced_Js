# Lab 12: Modular JavaScript and Namespacing Patterns

**Student Name:** Zhantore Kabylbek
**Date:** 17.04.2026

## Task 1 Overview
This task demonstrates the implementation of a utility library (`MyLib`) using three classic JavaScript module definition patterns, combined with namespace injection.

### Module Systems Comparison

1. **AMD (Asynchronous Module Definition)**
   * **Environment:** Browsers.
   * **Mechanism:** Uses `define()` to register modules and `require()` to load them asynchronously. This prevents render-blocking while scripts download.
   * **Use Case:** Legacy frontend applications where dynamic script loading is required without a build step.

2. **CommonJS**
   * **Environment:** Server-side (Node.js).
   * **Mechanism:** Uses synchronous `require()` calls and exposes public APIs via `module.exports`.
   * **Use Case:** Standard for Node.js backend development. Requires bundlers (like Webpack or Vite) to function in the browser.

3. **UMD (Universal Module Definition)**
   * **Environment:** Both Browser and Node.js.
   * **Mechanism:** An IIFE wrapper pattern that detects the current environment. If `define` exists, it uses AMD. If `module.exports` exists, it uses CommonJS. Otherwise, it attaches to the global object (e.g., `window`).
   * **Use Case:** Creating open-source libraries that need to work seamlessly across any JavaScript environment.

### Namespace Injection
Across all three implementations, we use **Namespace Injection** to safely extend the `MyLib` object. Instead of risking overwriting existing properties or polluting the global scope, the namespace function dynamically creates hierarchical objects (`utils.array`, `dom.element`) only if they do not already exist.