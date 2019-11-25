import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { Link } from '../../types';
import { LinkRepoService } from '../../link-repo.service';
import {
  NewsActionType,
  LoadLinks,
  LinksLoaded,
  AddLink,
  LinkAdded,
  UpvoteLink,
  LinkUpvoted
} from './news.actions';

@Injectable({
  providedIn: 'root'
})
export class NewsEffects {
  constructor(private actions: Actions, private linkRepo: LinkRepoService) {}

  @Effect()
  loadLinks$ = this.actions.pipe(
    ofType(NewsActionType.LoadLinks),
    switchMap((a: LoadLinks) => this.linkRepo.getLinks(a.payload)),
    map((r: Link[]) => new LinksLoaded(r))
  );

  @Effect()
  addLink$ = this.actions.pipe(
    ofType(NewsActionType.AddLink),
    switchMap((a: AddLink) => this.linkRepo.addLink(a.payload)),
    map((r: Link) => new LinkAdded(r))
  );

  @Effect()
  upvoteLink$ = this.actions.pipe(
    ofType(NewsActionType.UpvoteLink),
    switchMap((a: UpvoteLink) => this.linkRepo.upvote(a.payload)),
    map((r: Link) => new LinkUpvoted(r))
  );
}
