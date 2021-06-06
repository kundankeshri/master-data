import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ack-order',
  templateUrl: './ack-order.component.html',
  styleUrls: ['./ack-order.component.css']
})
export class AckOrderComponent implements OnInit {
  @Input()
  submittedListOfData : any;
  @Output()
  sendDataBackButtonEvent : EventEmitter <any> = new EventEmitter <any>();
  enquiryDate : any;
  constructor() { }
  cancleAck(){
    let obj ={'isCanceled' : false};
    this.sendDataBackButtonEvent.emit(obj);
  }

  ngOnInit() {
    this.enquiryDate = this.submittedListOfData[0].inquiry_created_date;
    console.log(JSON.stringify(this.submittedListOfData));
  }

}
