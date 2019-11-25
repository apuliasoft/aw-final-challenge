import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HackernewsDataModule } from '@hn/hackernews-data';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogInterceptorService } from './log-interceptor.service';
import { ExitWithoutSaveDialogComponent } from './exit-without-save-dialog/exit-without-save-dialog.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ExitWithoutSaveDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HackernewsDataModule,
    SharedModule
  ],
  entryComponents: [ExitWithoutSaveDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptorService,
      multi: true
    }
  ]
})
export class AppModule {}
