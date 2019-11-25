import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { LinkListComponent } from './link-list/link-list.component';

@NgModule({
  imports: [CommonModule, SharedModule, NewsRoutingModule],
  declarations: [LinkListComponent],
  exports: [LinkListComponent],
  providers: []
})
export class NewsModule {}
