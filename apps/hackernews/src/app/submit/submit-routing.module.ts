import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateLinkComponent } from './create-link/create-link.component';
import { ExitWithoutSaveGuard } from './exit-without-save.guard';

const routes = [
  {
    path: '',
    component: CreateLinkComponent,
    canDeactivate: [ExitWithoutSaveGuard]
  }
] as Routes;

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitRoutingModule {}
