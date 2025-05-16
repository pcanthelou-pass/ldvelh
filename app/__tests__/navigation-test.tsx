import { renderRouter, screen } from 'expo-router/testing-library';

describe('Navigation', () => {
  it('my-test', async () => {
    renderRouter(['index', 'books', 'book/[id]'], {
      initialUrl: '/index'
    });

    expect(screen).toHavePathname('/index');
  });
});
