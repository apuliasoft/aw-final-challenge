import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { NewsFacade, Link } from '@hn/hackernews-data';

import { LinkListComponent } from './link-list.component';

const links: Link[] = [
  {
    id: 1,
    description: 'Best search engine, ever',
    url: 'https://www.google.com',
    points: 0,
    pubDate: new Date()
  }
];

const newsFacadeMock = {
  links$: of(links),
  loadLinks: jest.fn()
};

@Pipe({
  name: 'simpleUrl'
})
export class SimpleUrlPipeMock implements PipeTransform {
  transform(value: string): string {
    return 'www.google.com';
  }
}

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipeMock implements PipeTransform {
  transform(value: Date, withoutSuffix?: boolean): string {
    return 'a few seconds';
  }
}

describe('LinkListComponent', () => {
  let sut: ComponentFixture<LinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NoopAnimationsModule, RouterTestingModule],
      declarations: [LinkListComponent, SimpleUrlPipeMock, TimeAgoPipeMock],
      providers: [
        {
          provide: NewsFacade,
          useValue: newsFacadeMock
        }
      ]
    }).compileComponents();

    sut = TestBed.createComponent(LinkListComponent);
    sut.detectChanges();
  }));

  test('should load links list', () => {
    expect(newsFacadeMock.loadLinks).toBeCalledWith(1);
  });

  test('should render links list', () => {
    expect(sut).toMatchSnapshot();
  });
});
