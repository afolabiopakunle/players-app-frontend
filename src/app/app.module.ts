import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayersModule } from './players/players.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PlayersModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
