import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WordsService} from '../../../services/words.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  editState = false;
  @ViewChild('wordsList', {static: false}) wordsContainerEl: ElementRef;
  constructor(private wordsServise: WordsService) { }

  ngOnInit() {
  }

  addWord() {
    this.editState = !this.editState;
    if (this.editState) {
      const inputEl = document.createElement('INPUT');
      inputEl.setAttribute('type', 'text');
      inputEl.addEventListener('change', (event: Event) => {
        const element = event.currentTarget as HTMLInputElement;
        this.wordsServise.words.push(element.value);
        inputEl.remove();
        this.editState = !this.editState;
        this.wordsServise.status.next('New word added');
      });
      this.wordsContainerEl.nativeElement.appendChild(inputEl);
    }
  }

  deleteWord(word) {
    const index = this.wordsServise.words.indexOf(word);
    if (index !== -1) {
      this.wordsServise.words.splice(index, 1);
      this.wordsServise.status.next('Word deleted');
    }
  }

}
