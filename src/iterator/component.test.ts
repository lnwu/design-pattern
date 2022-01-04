import { MyDomElement } from "./component";

test("can iterate root element", () => {
  const body = new MyDomElement("body");

  const header = new MyDomElement("header");

  const main = new MyDomElement("main");

  const banner = new MyDomElement("banner");
  const content = new MyDomElement("content");

  const footer = new MyDomElement("footer");

  body.addChildren(header);
  body.addChildren(main);
  body.addChildren(footer);

  main.addChildren(banner);
  main.addChildren(content);

  const expectTags: string[] = [];
  for (const element of body) {
    if (element) {
      expectTags.push(element.tag);
    }
  }

  expect(expectTags.length).toBe(5);
});

test("can iterate sub element", () => {
  const body = new MyDomElement("body");

  const header = new MyDomElement("header");

  const main = new MyDomElement("main");

  const banner = new MyDomElement("banner");
  const content = new MyDomElement("content");

  const footer = new MyDomElement("footer");

  body.addChildren(header);
  body.addChildren(main);
  body.addChildren(footer);

  main.addChildren(banner);
  main.addChildren(content);

  const expectTags: string[] = [];
  for (const element of main) {
    if (element) {
      expectTags.push(element.tag);
    }
  }

  expect(expectTags.length).toBe(2);
});

