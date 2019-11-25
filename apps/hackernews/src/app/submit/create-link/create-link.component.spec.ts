import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY } from 'rxjs';
import { NewsFacade } from '@hn/hackernews-data';

import { CreateLinkComponent } from './create-link.component';

const newsFacadeMock = {
  created$: EMPTY,
  addLink: jest.fn()
};

describe('CreateLinkComponent', () => {
  let sut: ComponentFixture<CreateLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        RouterTestingModule
      ],
      declarations: [CreateLinkComponent],
      providers: [
        {
          provide: NewsFacade,
          useValue: newsFacadeMock
        }
      ]
    }).compileComponents();

    sut = TestBed.createComponent(CreateLinkComponent);
    sut.detectChanges();
  }));

  test('should disabled submit button if inputs are invalid', () => {
    const submitBtn = sut.debugElement.query(By.css('button'));

    expect(submitBtn.nativeElement.disabled).toBeTruthy();
  });

  test('should enable submit button if inputs are valid', () => {
    const descriptionFixture = 'Best search engine, ever';
    const urlFixture = 'http://www.google.com';
    const expected = {
      description: descriptionFixture,
      url: urlFixture
    };

    const descriptionInp = sut.debugElement.query(
      By.css(`input[name="description"]`)
    );
    const urlInp = sut.debugElement.query(By.css(`input[name="url"]`));
    const rootForm = sut.debugElement.query(By.css('form'));

    descriptionInp.nativeElement.value = descriptionFixture;
    descriptionInp.nativeElement.dispatchEvent(new Event('input'));
    urlInp.nativeElement.value = urlFixture;
    urlInp.nativeElement.dispatchEvent(new Event('input'));

    rootForm.triggerEventHandler('ngSubmit', null);

    expect(newsFacadeMock.addLink.mock.calls.length).toBe(1);
    expect(newsFacadeMock.addLink.mock.calls[0][0]).toStrictEqual(expected);
  });
});
