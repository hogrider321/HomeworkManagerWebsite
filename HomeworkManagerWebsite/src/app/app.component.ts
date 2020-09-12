import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeworkManagerWebsite';

  // How to recieve the form group? Is this working?
  // public clickedEvent: any;

  // assignmentSubmitted(event: any) {
  //   console.log("arrived")
  //   this.clickedEvent = event;
  // }

  onActivate(componentReference) { // child to parent
    console.log(componentReference)
    componentReference.anyFunction();
    //Below will subscribe to the searchItem emitter
    componentReference.submitted.subscribe((data) => {
       // Will receive the data from child here 
    })
 }
}
