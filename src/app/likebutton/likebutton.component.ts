import { Component } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.css']
})
export class LikebuttonComponent {
  no:number=0;
  no1:number=0;
 increment(){
  this.no++;
  
   
 }
 decrement(){
  this.no1++;
 
 }
 get yourawseome(){
  return this.no-this.no1>=10;
 }
}
