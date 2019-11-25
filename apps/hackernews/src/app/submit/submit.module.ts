import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SubmitRoutingModule } from './submit-routing.module';
import { CreateLinkComponent } from './create-link/create-link.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    SubmitRoutingModule
  ],
  declarations: [CreateLinkComponent],
  exports: [CreateLinkComponent]
})
export class SubmitModule {}
