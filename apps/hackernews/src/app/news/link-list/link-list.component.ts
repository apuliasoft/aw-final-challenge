import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
  useAnimation
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { NewsFacade, Link } from '@hn/hackernews-data';

import { fadeIn } from '../../shared/animations';

@Component({
  selector: 'hn-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
  animations: [
    trigger('scroll', [
      state(
        'top',
        style({
          top: '80px'
        })
      ),
      state(
        'bottom',
        style({
          bottom: '20px'
        })
      ),
      transition('* => *', animate('1s .2s ease-in-out'))
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        useAnimation(fadeIn, {
          params: { opacity: '0', translateY: '50px' }
        })
      ])
    ])
  ]
})
export class LinkListComponent implements OnInit {
  links$: Observable<Link[]>;
  page: number;
  scroll$: Observable<string>;

  constructor(private route: ActivatedRoute, private newsFacade: NewsFacade) {
    this.links$ = this.newsFacade.links$;
    this.scroll$ = fromEvent(document, 'scroll').pipe(
      map(e =>
        (e.target as Document).scrollingElement.scrollTop > 0 ? 'top' : 'bottom'
      )
    );
  }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map(p => (p.has('p') ? parseInt(p.get('p'), 10) : 1)),
        tap(p => (this.page = p))
      )
      .subscribe(p => this.newsFacade.loadLinks(p));
  }

  upvoteHandler(link: Link) {
    this.newsFacade.upvoteLink(link.id);
  }
}
