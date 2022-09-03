import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"


const MateraialComponents=[
  MatButtonModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    MateraialComponents
  ],
  exports:[MateraialComponents]
})
export class MaterialModule { }
