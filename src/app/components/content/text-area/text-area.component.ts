import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TextAreaService} from '../../../services/text-area.service';
import {WordsService} from '../../../services/words.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  textArea: string;
  editState = false;
  @ViewChild('textarea', {static: false}) teaxtAreaEl: ElementRef;
  constructor(private textAreaService: TextAreaService, private wordsServise: WordsService) {
    this.textArea = this.underlineWordsToString(this.textAreaService.text);
    this.wordsServise.status.subscribe((message: string) => {
      this.textArea = this.underlineWordsToString(this.textAreaService.text);
    });
  }

  saveText() {
    this.editState = !this.editState;

    if (this.textArea.length === 0) {
      alert('Text field is empty!');
      this.editState = !this.editState;
      return;
    }

    if (this.editState) {
      setTimeout(() => this.teaxtAreaEl.nativeElement.focus(), 0);
      this.textArea = this.textAreaService.text.join(' ');
    } else {
      // сохраняем стейт
      this.textAreaService.text = this.textArea.split(' ');
      // подчеркиваем слова
      this.textArea = this.underlineWordsToString(this.textAreaService.text);
    }
  }

  underlineWordsToString(wordsArr: string[]): string {
    return wordsArr.map((word) =>
      this.wordsServise.words.includes(word.toLowerCase().replace(/[^а-яa-z]/gi, '')) ? '<span>' + word + '</span>' : word).join(' ');
  }

  ngOnInit() {
  }

}
