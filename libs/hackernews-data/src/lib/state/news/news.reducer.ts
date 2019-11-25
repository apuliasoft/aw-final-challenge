import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { Link } from '../../types';

import { NewsActionType, NewsActions } from './news.actions';

export interface NewsState extends EntityState<Link> {}

export const adapter = createEntityAdapter<Link>();

export const initialState = adapter.getInitialState();

export function newsReducer(
  state = initialState,
  { type, payload }: NewsActions
): NewsState {
  switch (type) {
    case NewsActionType.LinksLoaded:
      return adapter.addAll(payload as Link[], state);
    case NewsActionType.LinkAdded:
      return adapter.addOne(payload as Link, state);
    case NewsActionType.LinkUpvoted:
      return adapter.upsertOne(payload as Link, state);
    default:
      return state;
  }
}

const { selectAll } = adapter.getSelectors();

export const selectAllNews = selectAll;
