/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    exclude: ['dist','node_modules'],
    coverage: {
      provider: 'v8',
    }
  },
});