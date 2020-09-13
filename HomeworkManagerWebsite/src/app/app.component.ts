import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NewAssignmentComponent } from './new-assignment/new-assignment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeworkManagerWebsite';

  assignmentForm: FormGroup;

  onActivate(componentReference) { // child to parent
    // if component reference = new assignment:
    //  you will call a function inside the new assigment component that 
    //  waits until the new form is submitted (by subscribing to boolean). 
    //  once the boolean is true, it will return something to the appcomponent
    //  once something has returned to appcomponent, appcomponent will fetch form using compoenent reference
    //  store form in a global variable

    // if component reference = classes/dashboard:
    // send variable with form to the correct comp (classes/dash)

    if (componentReference.constructor.name == "NewAssignmentComponent") {
      componentReference.formCompleted.subscribe(x => {
        if (x == true) {
          this.assignmentForm = componentReference.form;
          console.log(this.assignmentForm);
          componentReference.formCompleted = false;
        }
      });
    }

    console.log(componentReference);
    // componentReference.anyFunction();
    //Below will subscribe to the searchItem emitter
    componentReference.form.subscribe((data) => {
      // Will receive the data from child here 
      console.log(data);
    })
  }
}
