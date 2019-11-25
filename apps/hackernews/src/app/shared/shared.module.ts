import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSlideToggleModule,
  MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';

import { TimeAgoPipe } from './time-ago.pipe';
import { SimpleUrlPipe } from './simple-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeAgoPipe, SimpleUrlPipe],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSlideToggleModule,
    TimeAgoPipe,
    SimpleUrlPipe
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ]
})
export class SharedModule {}
