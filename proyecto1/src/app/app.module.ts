import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WikiFrameComponent } from './wiki-frame/wiki-frame.component';
import { WikiService } from './wiki.service';
import { InputFrameComponent } from './input-frame/input-frame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports:      [ BrowserModule, MatButtonModule, MatSliderModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, WikiFrameComponent, InputFrameComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WikiService]
})
export class AppModule { }
