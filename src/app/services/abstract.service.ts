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
    return this.httpClient.get(this.url + url);
  }
}
