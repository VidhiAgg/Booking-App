import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button"


const MateraialComponents=[
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    MateraialComponents
  ],
  exports:[MateraialComponents]
})
export class MaterialModule { }
