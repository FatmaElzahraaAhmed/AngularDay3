import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  studentName = "";
  studentAge = "";

  @Output() dataEvent = new EventEmitter();
  saveData() 
  {
    if (this.isValidStudentname() && this.isValidAge()) 
      {
      let studentData = { studentName: this.studentName, studentAge: +this.studentAge };
      this.dataEvent.emit(studentData);
      this.studentName = "";
      this.studentAge = "";
    }
  }

  private isValidStudentname(): boolean 
  {
    return this.studentName.length >= 3;
  }

  private isValidAge(): boolean 
  {
    let age = +this.studentAge;
    return !isNaN(age) && age >= 10 && age <= 30;
  }
}