import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { ColorBoxComponent } from './color-box/color-box.component';
import { FormsModule} from '@angular/forms';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LikebuttonComponent,
    ColorBoxComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
