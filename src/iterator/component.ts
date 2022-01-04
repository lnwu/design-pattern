export class MyDomElement {
  tag: string;
  children: MyDomElement[];
  constructor(tag: string) {
    this.tag = tag;
    this.children = [];
  }

  addChildren(component: MyDomElement) {
    this.children.push(component);
  }
  [Symbol.iterator]() {
    const list = [...this.children];
    let node;

    return {
      next: () => {
        while ((node = list.shift())) {
          node.children.length > 0 && list.push(...node.children);

          return { value: node, done: false };
        }
        return { value: null, done: true };
      },
    };
  }
}
