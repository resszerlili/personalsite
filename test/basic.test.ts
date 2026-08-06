import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import Navigation from '../src/components/navigation.astro';

test('Navigation', async function() {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Navigation);

    expect(result).toContain('about');
    expect(result).toContain('posts');
})