import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-array-button',
  templateUrl: './delete-array-button.component.html',
  styleUrls: ['./delete-array-button.component.scss']
})
export class DeleteArrayButtonComponent implements OnInit {

  @Input() array!: any[];
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

  removeToList(array: any, index: any) {
    array.removeAt(index);
  }
}
