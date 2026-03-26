const DEFAULT_OPTIONS = {
  maxAttempts: 3,
  baseDelay: 1000,
  maxDelay: 10000,
  backoffMultiplier: 2,
  retryableStatuses: [408, 429, 500, 502, 503, 504],
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function withRetry(fn, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  let delay = config.baseDelay;

  for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isRetryable = error.status && config.retryableStatuses.includes(error.status);
      if (attempt === config.maxAttempts || !isRetryable) throw error;

      console.warn(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await sleep(delay);
      delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
    }
  }
}