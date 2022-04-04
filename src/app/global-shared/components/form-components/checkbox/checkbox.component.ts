import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input()  group!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
