import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html'
})
export class NewAssignmentComponent implements OnInit {
  // @Output() submitted = new EventEmitter<any>(); // same as below
  @Output() submitted: EventEmitter<any> = new EventEmitter(); // child to parent

  form: FormGroup;

  formCompleted: boolean = false;
  // formCompletedOBS = this.formCompleted.asObservable(); booleans cant be observables???

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

  submit() {
    this.formCompleted = true;
    // child to parent: emit data to parent component
    this.submitted.emit(this.form);
  }

}
