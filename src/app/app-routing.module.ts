import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { HomeComponent } from './home/home.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { MemesComponent } from './memes/memes.component';

const routes: Routes = [
  {path: 'about-us', component: AboutUsComponent},
  {path: 'merch', component: MerchandiseComponent},
  {path: 'quizzes', component: QuizzesComponent},
  {path: 'memes', component: MemesComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
