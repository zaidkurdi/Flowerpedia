import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './home/header/header.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ImageSlideshowComponent } from './home/main-page/image-slideshow/image-slideshow.component';
import { MainPageContentComponent } from './home/main-page/main-page-content/main-page-content.component';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from './home/explore/explore.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FunFactComponent } from './home/fun-fact/fun-fact.component';
import { AboutUsComponent } from './home/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'more-details', component: MoreDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ImageSlideshowComponent,
    MainPageContentComponent,
    ExploreComponent,
    MoreDetailsComponent,
    HomeComponent,
    FunFactComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CarouselModule,
    TooltipModule.forRoot(),
    FormsModule,
    MatTabsModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
