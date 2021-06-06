import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css'],
  providers : [DataService]
})
export class OrderReviewComponent implements OnInit {
  enquiryList : any;
  isOrderReview = true;
  isOrderAck = false;
  orderToAck : any;

  constructor(private dataService : DataService) { }
  getApprovedList(){
    this.dataService.getApprovedList()  
    .then( data => {
      this.enquiryList = [];
      this.enquiryList = data;
    })
  }

  onStateChanged(e){
    this.isOrderAck = e.isCanceled;
    this.isOrderReview = true;
  }

  ackOrder(id : any){
    this.orderToAck = this.enquiryList.filter(function(e){return e.inquiry_id == id})
    this.isOrderReview = false;
    this.isOrderAck = true;
    console.log(id);
  }

  ngOnInit() {
    this.getApprovedList();
  }

}
