import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// prime ng
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel';
import { SharedModule as PrimeNgSharedModule } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';

// routing
import { AppRoutingModule } from './app-routing.module';

// app
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    // prime ng
    ButtonModule,
	FileUploadModule,
	PanelModule,
    PrimeNgSharedModule,
	TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
