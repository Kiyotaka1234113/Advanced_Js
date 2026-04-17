# Lab 12.2: Nested Namespacing and Library Development
**Student Name:** Zhantore 

## Architecture Overview
This section of the lab demonstrates the creation of a robust, hierarchical utility library named `MyApp` using the **Nested Namespacing Pattern**.

### Why Nested Namespacing?
In large-scale JavaScript applications without native ES6 modules, flat namespaces can quickly become cluttered. Nested namespacing solves this by:
1. **Preventing Global Scope Pollution:** Only a single global variable (`MyApp`) is attached to the `window` object.
2. **Logical Organization:** Code is grouped hierarchically by domain (e.g., `MyApp.utils.array`, `MyApp.plugins.validation`).
3. **Safe Extension:** The `namespace()` function dynamically injects and safely creates missing path segments without overwriting existing data.

### Loading Sequence
To ensure the library initializes correctly, the files must be loaded in strict order:
1. `core.js`: Defines the root `MyApp` object and the `namespace` injection utility.
2. `utils.js`: Uses the namespace utility to attach string, array, date, and number helpers.
3. `plugins.js`: Attaches complex functional modules (storage, validation, router) to the `MyApp.plugins` namespace.

### Extensibility
Third-party developers can extend this library at runtime by calling `MyApp.plugins.register('plugins.custom', { ... })`, which seamlessly integrates new functionality into the existing architecture.