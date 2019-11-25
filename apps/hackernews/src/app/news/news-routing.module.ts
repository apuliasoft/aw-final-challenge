import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LinkListComponent } from './link-list/link-list.component';

const routes = [
  {
    path: '',
    component: LinkListComponent
  }
] as Routes;

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
