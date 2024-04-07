import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  @Input() allStudentsData: { studentName: string, studentAge: string }[] = [];
}