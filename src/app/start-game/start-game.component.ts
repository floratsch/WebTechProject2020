import { Component} from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';
import { User } from '@app/_models';
import {AccountService} from '@app/_services';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent{
  private quiz: Quiz[];
  user: User;

  constructor(private questionsService: QuestionsService, private accountService: AccountService) {
    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz = quiz;
      });
    this.user = this.accountService.userValue;
  }

}
