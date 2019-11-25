import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { Router } from '@angular/router';
import {
  FormBuilder,
  AbstractControl,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { take } from 'rxjs/operators';

import { NewsFacade } from '@hn/hackernews-data';

import { fadeIn } from '../../shared/animations';

@Component({
  selector: 'hn-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        useAnimation(fadeIn, {
          params: { opacity: '.5', translateY: '-50px' }
        })
      ])
    ])
  ]
})
export class CreateLinkComponent implements OnInit {
  linkForm = this.fb.group({
    description: [
      '',
      [Validators.required, Validators.minLength(4), this.notDescrizione()]
    ],
    url: ['', [Validators.required, Validators.pattern('https?://[\\w./]+')]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private newsFacade: NewsFacade
  ) {}

  ngOnInit() {
    this.newsFacade.created$
      .pipe(take(1))
      .subscribe(_ => this.router.navigate(['/new']));
  }

  createLink() {
    this.linkForm.markAsPristine();
    this.newsFacade.addLink(this.linkForm.value);
  }

  notDescrizione(): ValidatorFn {
    return (control: AbstractControl) => {
      const invalid = control.value.toLowerCase().indexOf('descrizione') > -1;
      return invalid ? { notDescrizione: { value: control.value } } : null;
    };
  }
}
