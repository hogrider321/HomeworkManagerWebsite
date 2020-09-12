import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html'
})
export class NewAssignmentComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();

  form: FormGroup;

  constructor(fb:FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl('Assignment'),
      dueDate: new FormControl('June'),
      difficulty: new FormControl('Easy'),
      class: new FormControl('Math')
      });
    }

  ngOnInit(): void {
  }

  submit(): void {
    // console.log(this.form.get('name').value);
    // console.log(this.form.get('dueDate').value);
    // console.log(this.form.get('difficulty').value);
    // console.log(this.form.get('class').value);

    this.submitted.emit(this.form);
  }
}
