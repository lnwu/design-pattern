import { File, Folder } from "./file";

test("should return size from folder", () => {
  const file = new File("file", 10);
  const folder = new Folder("folder");

  folder.add(file);

  expect(folder.getSize()).toBe(10);
});

test("should return size from nested folder", () => {
  const file = new File("file1", 10);
  const folder = new Folder("folder1");

  const file2 = new File("file2", 20);
  const file3 = new File("file3", 30);

  const folder2 = new Folder("folder2");
  const folder3 = new Folder("folder3");

  folder.add(file);
  folder.add(file2);

  folder2.add(file3);
  folder2.add(folder);

  folder3.add(folder2);

  expect(folder3.getSize()).toBe(60);
});
