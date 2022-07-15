import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HeroIconModule, allIcons } from 'ng-heroicon';

import { LoadingViewComponent } from './shared/loading/loading-view/loading-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LoadingViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HeroIconModule.forRoot(
      {
        ...allIcons,
      },
      {
        defaultHostDisplay: 'inlineBlock',
        attachDefaultDimensionsIfNoneFound: true,
      }
    ),
    AngularFireStorageModule,
    AngularFireAuthModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
