import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class AbstractService {
  url: string;

  protected constructor(protected httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  getByUrl(url: string): Observable<any> {
    const arr = url.split('/');
    return this.getById(Number(arr[arr.length - 2]));
  }
}
