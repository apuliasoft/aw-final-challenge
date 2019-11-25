import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { selectAllNews } from '../state';
import { NewsActionType, LoadLinks, AddLink, UpvoteLink } from './news.actions';
import { NewsState } from './news.reducer';
import { Link } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class NewsFacade {
  links$ = this.store.pipe(select(selectAllNews));
  created$ = this.actions.pipe(ofType(NewsActionType.LinkAdded));

  constructor(private store: Store<NewsState>, private actions: Actions) {}

  loadLinks(page: number) {
    this.store.dispatch(new LoadLinks(page));
  }

  addLink(link: Link) {
    this.store.dispatch(new AddLink(link));
  }

  upvoteLink(linkId: number) {
    this.store.dispatch(new UpvoteLink(linkId));
  }
}
