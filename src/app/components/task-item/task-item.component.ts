import { Component, OnInit,Input,EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

 
  @Input() task:Task={id:4,text:'hihi',day:'Today',reminder:true};
  faTimes=faTimes;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleTask:EventEmitter<Task>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task:Task):void{
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    this.onToggleTask.emit(task);
    
  }
}
