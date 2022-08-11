import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { MemesComponent } from './memes/memes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EpisodesComponent,
    MerchandiseComponent,
    QuizzesComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = "Camp Half-Pod";
}
