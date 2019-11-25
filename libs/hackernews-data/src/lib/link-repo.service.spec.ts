import { TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { LinkRepoService } from './link-repo.service';
import { Link } from './types';

describe('LinkRepoService', () => {
  let httpMock: HttpTestingController;
  let sut: LinkRepoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LinkRepoService]
    });

    httpMock = TestBed.get(HttpTestingController);
    sut = TestBed.get(LinkRepoService);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  test('should call POST link', () => {
    const inputLinkFixture: Link = {
      description: 'Best search engine, ever',
      url: 'https://www.google.com'
    };
    const outputLinkFixture: Link = {
      id: 1,
      description: 'Best search engine, ever',
      url: 'https://www.google.com',
      points: 0,
      pubDate: new Date()
    };

    sut.addLink(inputLinkFixture).subscribe(l => {
      expect(l).toEqual(outputLinkFixture);
    });

    const req = httpMock.expectOne('https://as-hackernews.herokuapp.com/link');

    expect(req.request.method).toEqual('POST');

    req.flush(outputLinkFixture);
  });
});
