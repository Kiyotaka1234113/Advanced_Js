export class CancellableFetcher {
  constructor() {
    this.abortControllers = new Map();
  }

  async fetch(url, options = {}) {
    const id = options.id || Math.random().toString(36);
    const controller = new AbortController();
    this.abortControllers.set(id, controller);

    try {
      const response = await fetch(url, { ...options, signal: controller.signal });
      this.abortControllers.delete(id);
      return await response.json();
    } catch (error) {
      this.abortControllers.delete(id);
      if (error.name === 'AbortError') {
        throw new Error(`Request ${id} was cancelled`);
      }
      throw error;
    }
  }

  cancel(id) {
    const controller = this.abortControllers.get(id);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(id);
    }
  }

  cancelAll() {
    this.abortControllers.forEach(c => c.abort());
    this.abortControllers.clear();
  }
}