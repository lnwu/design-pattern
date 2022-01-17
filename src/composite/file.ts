export class File {
  name: string;
  private size: number;
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  getSize(): number {
    return this.size;
  }
}

export class Folder {
  name: string;
  private files: Array<File | Folder>;
  constructor(name: string) {
    this.name = name;
    this.files = [];
  }

  getSize(): number {
    return this.files.reduce((acc, file) => acc + file.getSize(), 0);
  }

  add(file: File | Folder): void {
    this.files.push(file);
  }
}
