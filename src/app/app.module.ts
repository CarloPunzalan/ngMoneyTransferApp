import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StateService } from './services/state.service';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './shared/inventory/inventory.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './shared/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
