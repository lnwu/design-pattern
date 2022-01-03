import { api } from "./utils";

export class Request {
  static instance: Request;
  private cache: Record<string, string>;

  constructor() {
    this.cache = {};
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new Request();
    return this.instance;
  }

  public async request(url: string) {
    if (this.cache[url]) {
      return this.cache[url];
    }
    const response = await api(url);
    this.cache[url] = response;

    return response;
  }
}
