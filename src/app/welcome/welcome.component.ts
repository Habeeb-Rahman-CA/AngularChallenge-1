import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  greeting = signal<string>('')
  backgroundColor = signal<string>('')

  currentTime = new Date().toLocaleTimeString()
  timeInHour = new Date().getHours()

  ngOnInit(): void {
      if (this.timeInHour < 12) {
        this.greeting.set('Good Morning')
        this.backgroundColor.set('#FEEE91')
      } else if (this.timeInHour < 16) {
        this.greeting.set('Good Afternoon')
        this.backgroundColor.set('#B7E0FF')
      } else {
        this.greeting.set('Good Evening')
        this.backgroundColor.set('#0B192C')
      }
  }

}
