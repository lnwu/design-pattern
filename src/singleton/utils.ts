export const api = (url: string) =>
new Promise<string>((resolve) => setTimeout(() => resolve(url), 500));