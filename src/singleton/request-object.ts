import { api } from "./utils";

const cache: Record<string, string> = {};

export const request = async (url: string) => {
  if (cache[url]) {
    return cache[url];
  }

  const response = await api(url);

  cache[url] = response;
  return response;
};
