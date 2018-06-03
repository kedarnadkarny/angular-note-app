import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Modules
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { ItemsComponent } from './components/items/items.component';
import { FormsModule } from '@angular/forms';

// Services
import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
