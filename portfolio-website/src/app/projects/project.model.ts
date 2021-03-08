
export class Project {
  constructor(private name: string,
    private description: string, private imgUrl: string) {}

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getImgUrl(): string {
    return this.imgUrl;
  }
}
