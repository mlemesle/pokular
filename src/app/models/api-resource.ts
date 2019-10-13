export class ApiResource {

  url: string;

  constructor(data: any) {
    if (data) {
      this.url = data.url;
    }
  }
}
