import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: string[] = ['герои', 'площади', 'когда'];
  status: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }
}
