import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Link } from './types';

@Injectable({
  providedIn: 'root'
})
export class LinkRepoService {
  private readonly apiHost = 'https://as-hackernews.herokuapp.com';

  constructor(private http: HttpClient) {}

  getLinks(page: number) {
    return this.http.get<Link[]>(`${this.apiHost}/link?p=${page}`);
  }

  upvote(id: number) {
    return this.http.post<Link>(`${this.apiHost}/link/${id}/upvote`, null);
  }

  addLink(link: Link) {
    return this.http.post<Link>(`${this.apiHost}/link`, link);
  }
}
