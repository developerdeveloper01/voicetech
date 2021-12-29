import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { environment } from '@env/environment';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyConfigModule } from './formly-config.module';
import { appInitializerProviders } from '@core/initializers';
import { httpInterceptorProviders } from '@core/interceptors';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BASE_URL } from '@core/interceptors/base-url-interceptor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InMemDataService } from './shared/in-mem/in-mem-data.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminAuthService } from './core/authentication/admin-auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
    SharedModule,
    FormlyConfigModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientInMemoryWebApiModule.forRoot(InMemDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseUrl },
    httpInterceptorProviders,
    appInitializerProviders,
    UserService,
    AdminAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
