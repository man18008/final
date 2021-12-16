import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { habit } from '../habit.model';
import * as uuid from 'uuid';
import { habitService } from '../habit.service';

@Component({
  selector: 'bujo-habit-edit',
  templateUrl: './habit-edit.component.html',
  styleUrls: ['./habit-edit.component.css']
})

export class habitEditComponent implements OnInit {

  // @Output() addhabitEvent = new EventEmitter<habit>();
  @Output() addhabitEvent: EventEmitter<habit> = new EventEmitter<habit>();

  currentSender = '19';

  @ViewChild('subject', { static: true }) subject: ElementRef;
  @ViewChild('msgText', { static: true }) msgText: ElementRef;

  constructor(private habitService: habitService) { }

  ngOnInit(): void {
  }

  onSendhabit() {
    const id = uuid.v4();
    const sender = this.currentSender;
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const newhabit = new habit(id, subject, msgText, sender);
    this.habitService.addhabit(newhabit);
    //this.addhabitEvent.emit(newhabit);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }

}
