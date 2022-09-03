import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from "@angular/material/input";
import { BookingComponent } from '../components/booking/booking.component';


const MateraialComponents= [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  

]

@NgModule({
  declarations: [BookingComponent],
  imports: [
    MateraialComponents
 
  ],
  exports:[MateraialComponents]
})
export class MaterialModule { }
