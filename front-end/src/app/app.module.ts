import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReglementCreateComponent } from './view/reglements/reglement-create/reglement-create.component';
import { ReglementEditComponent } from './view/reglements/reglement-edit/reglement-edit.component';
import { ReglementViewComponent } from './view/reglements/reglement-view/reglement-view.component';
import { ReglementListComponent } from './view/reglements/reglement-list/reglement-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglementCreateComponent,
    ReglementEditComponent,
    ReglementViewComponent,
    ReglementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
