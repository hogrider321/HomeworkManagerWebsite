import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html'
})
export class NewAssignmentComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();

  form: FormGroup;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      name:'',
      dueDate: '',
      difficulty: '',
      class: ''
      });
    }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.get('name').value);
    console.log(this.form.get('dueDate').value);
    console.log(this.form.get('difficulty').value);
    console.log(this.form.get('class').value);

    this.submitted.emit(this.form);
    // this.submitted.emit({this.form.get('name').value, this.form.get('dueDate').value});
  }
}
