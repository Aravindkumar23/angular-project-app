import { Component } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent {
  clr=""
  colorList=['red','blue','purple'];
  UpdateClr(event:any){
   this.clr=event.target.value;
 }
 
}
