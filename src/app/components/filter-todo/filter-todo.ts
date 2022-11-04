import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StatusFilter } from 'src/app/types/todo';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.html',
  styleUrls: ['./filter-todo.css'],
})
export class FilterTodoComponent implements OnInit {
  public valueFilter: string = 'all';
  @Input() todoFilterStatus: string[] = StatusFilter;
  @Input() filterParams?: string | null;
  @Output()
  filteredValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilterChange = (e: Event) => {
    this.filteredValue.emit((e.target as HTMLInputElement).value);
  };
}
