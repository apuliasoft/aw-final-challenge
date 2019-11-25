import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromNews from './news/news.reducer';

export interface AppState {
  news: fromNews.NewsState;
}

export const reducers: ActionReducerMap<AppState> = {
  news: fromNews.newsReducer
};

const selectNewsState = createFeatureSelector<fromNews.NewsState>('news');

export const selectAllNews = createSelector(
  selectNewsState,
  fromNews.selectAllNews
);
