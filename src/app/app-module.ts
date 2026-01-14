import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Landingpage } from './landingpage/landingpage';

@NgModule({
  declarations: [
    App,
    Landingpage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
   

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
