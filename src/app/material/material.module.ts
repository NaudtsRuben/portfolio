import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNavList, MatListModule } from '@angular/material/list';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot()
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCarouselModule
  ]
})
export class MaterialModule { }
