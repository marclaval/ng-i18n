require('zone.js/dist/zone');
import "reflect-metadata";

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppModule} from './module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);