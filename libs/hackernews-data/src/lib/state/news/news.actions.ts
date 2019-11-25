import { Action } from '@ngrx/store';

import { Link } from '../../types';

export enum NewsActionType {
  LoadLinks = '[News] Load',
  LinksLoaded = '[News] Loaded',
  AddLink = '[News] Add',
  LinkAdded = '[News] Added',
  UpvoteLink = '[News] Upvote',
  LinkUpvoted = '[News] Upvoted'
}

export class LoadLinks implements Action {
  readonly type = NewsActionType.LoadLinks;
  constructor(public payload: number) {}
}
export class LinksLoaded implements Action {
  readonly type = NewsActionType.LinksLoaded;
  constructor(public payload: Link[]) {}
}

export class AddLink implements Action {
  readonly type = NewsActionType.AddLink;
  constructor(public payload: Link) {}
}
export class LinkAdded implements Action {
  readonly type = NewsActionType.LinkAdded;
  constructor(public payload: Link) {}
}

export class UpvoteLink implements Action {
  readonly type = NewsActionType.UpvoteLink;
  constructor(public payload: number) {}
}
export class LinkUpvoted implements Action {
  readonly type = NewsActionType.LinkUpvoted;
  constructor(public payload: Link) {}
}

export type NewsActions =
  | LoadLinks
  | LinksLoaded
  | AddLink
  | LinkAdded
  | UpvoteLink
  | LinkUpvoted;
