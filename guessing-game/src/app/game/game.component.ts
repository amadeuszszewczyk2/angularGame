import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  targetNumber: number;
  currentGuess: number | null = null;
  message: string = '';

  constructor() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
  }

  ngOnInit(): void {}

  checkGuess() {
    if (this.currentGuess !== null) {
      if (this.currentGuess == this.targetNumber) {
        this.message = 'Congratulations! You guessed it!';
      } else if (this.currentGuess < this.targetNumber) {
        this.message = 'Too low. Try again.';
      } else {
        this.message = 'Too high. Try again.';
      }
    } else {
      this.message = 'Please enter a number.';
    }
  }
}
