import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string="";
  day: string="";
  reminder:boolean=false;
  @Output() onAddTask:EventEmitter<Task>=new EventEmitter();
  showAddTask:boolean=false;
  subscription:Subscription=new Subscription();

  constructor(private uiService:UiService) { 
    this.subscription=this.uiService.onToggle().subscribe((value)=>this.showAddTask=value);
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("Please add text");
      this.text="";
      return;
    }
    
    
    const newTask = {
        text: this.text,
        day:this.day,
        reminder:this.reminder
      }
    this.text="";
    this.day="";
    this.reminder=false;
    
    this.onAddTask.emit(newTask);
  }
  
}
