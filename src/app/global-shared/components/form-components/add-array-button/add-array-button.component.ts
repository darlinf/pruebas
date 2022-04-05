import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-array-button',
  templateUrl: './add-array-button.component.html',
  styleUrls: ['./add-array-button.component.scss']
})
export class AddArrayButtonComponent {

  @Input() array!: any[];
  @Input() item!: any;

  constructor() { }

  addToList(array: any[], item: any) {
    array.push(item);
  }

}
