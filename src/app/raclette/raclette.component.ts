import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: 'raclette.component.html',
  styleUrl: './raclette.component.css'
})
export class Raclette {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = false;
  isAdmin:Boolean = true;

 changeRole(){
 this.isAdmin= !this.isAdmin;
 }
  };
