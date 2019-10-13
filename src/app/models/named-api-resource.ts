export class NamedApiResource {

  name: string;
  url: string;

  constructor(data: any) {
    if (data) {
      this.name = data.name;
      this.url = data.url;
    }
  }
}
