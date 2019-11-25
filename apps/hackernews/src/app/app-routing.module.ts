import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path: 'new',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./submit/submit.module').then(m => m.SubmitModule)
  },
  { path: '**', redirectTo: '/new', pathMatch: 'full' }
] as Routes;

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
