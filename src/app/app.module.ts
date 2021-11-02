import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from 'src/filterpipe';
import { PipesModule } from 'w-ng5';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SearchComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatListModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
  
    //PipesModule

  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class AppModule { }