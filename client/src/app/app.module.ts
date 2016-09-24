// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
