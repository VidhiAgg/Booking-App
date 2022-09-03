import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import { BookingComponent } from '../components/booking/booking.component';
import {MatSelectModule} from "@angular/material/select";


const MateraialComponents= [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule
  

]

@NgModule({
  declarations: [BookingComponent],
  imports: [
    MateraialComponents
 
  ],
  exports:[MateraialComponents]
})
export class MaterialModule { }
