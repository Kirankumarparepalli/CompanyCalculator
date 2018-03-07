import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator/calculator.service';

@NgModule({
  declarations: [ AppComponent,CalculatorComponent ],
  imports: [ BrowserModule,FormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatSelectModule,MatButtonModule, BrowserAnimationsModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent,CalculatorComponent]
})
export class AppModule { }
