export class AsyncPipeline {
  constructor() {
    this.stages = [];
  }

  use(middleware) {
    this.stages.push(middleware);
    return this;
  }

  async execute(initialData, context = {}) {
    let data = initialData;
    let currentContext = context;

    for (const stage of this.stages) {
      const result = await stage(data, currentContext);
      if (result === null || result === undefined) {
        throw new Error(`Stage ${stage.name || 'anonymous'} returned null/undefined`);
      }
      
      if (Array.isArray(result) && result.length === 2) {
        data = result[0];
        currentContext = { ...currentContext, ...result[1] };
      } else {
        data = result;
      }
    }
    return data;
  }
}

export async function mapParallel(items, handler, concurrency = 5) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const chunk = items.slice(i, i + concurrency);
    const chunkResults = await Promise.all(chunk.map(item => handler(item)));
    results.push(...chunkResults);
  }
  return results;
}