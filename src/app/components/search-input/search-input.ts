import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Mode } from 'src/app/types/todo';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.html',
  styleUrls: ['./search-input.css'],
})
export class SearchInputComponent implements OnInit {
  public inputValue?: string = '';
  @Input() valueEditTodo?: string = '';
  @Input() mode?: Mode = {
    modeName: 'Add',
    modeBackground: 'blue',
  };
  @Output() addNewTodo = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleAddNewTodo = () => {
    this.addNewTodo.emit(this.inputValue);
    this.inputValue = '';
  };
}
