import { TestBed, async } from '@angular/core/testing';
import { SimpleUrlPipe } from './simple-url.pipe';

describe('SimpleUrlPipe', () => {
  let sut: SimpleUrlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SimpleUrlPipe]
    });

    sut = TestBed.get(SimpleUrlPipe);
  }));

  test('should transform HTTP url', () => {
    const fixture = 'http://www.google.com';
    const expected = 'www.google.com';

    const actual = sut.transform(fixture);

    expect(actual).toBe(expected);
  });

  test('should transform HTTPS url', () => {
    const fixture = 'https://www.google.com';
    const expected = 'www.google.com';

    const actual = sut.transform(fixture);

    expect(actual).toBe(expected);
  });
});
