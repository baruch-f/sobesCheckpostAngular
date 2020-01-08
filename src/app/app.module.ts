import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { LoginComponent } from './components/header/login/login.component';
import { TextAreaComponent } from './components/content/text-area/text-area.component';
import { SidebarComponent } from './components/content/sidebar/sidebar.component';
import {FormsModule} from '@angular/forms';
import {TextAreaService} from './services/text-area.service';
import {WordsService} from './services/words.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LogoComponent,
    LoginComponent,
    TextAreaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TextAreaService, WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
