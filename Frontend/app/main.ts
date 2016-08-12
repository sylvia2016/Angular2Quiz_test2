import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { CommonService }  from './common.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [appRouterProviders, CommonService, HTTP_PROVIDERS, disableDeprecatedForms, provideForms]);
