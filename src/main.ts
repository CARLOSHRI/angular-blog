import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from "./app/AppComponent.2";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
