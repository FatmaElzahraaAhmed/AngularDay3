import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentsComponent,RegistrationComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  

    studentData:{studentName: string, studentAge: string} = { studentName: "", studentAge: "" };
    allStudentsData:{studentName: string, studentAge: string}[] = []; 
  
    getStudentData(data: any) 
    {
      // console.log(data);
      this.studentData = data;
      this.allStudentsData.push(this.studentData);
      console.log(this.allStudentsData);
      
    }
  }