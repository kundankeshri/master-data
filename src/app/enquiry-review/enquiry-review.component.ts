import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-enquiry-review',
  templateUrl: './enquiry-review.component.html',
  styleUrls: ['./enquiry-review.component.css'],
  providers : [DataService]
})
export class EnquiryReviewComponent implements OnInit {
  enquiryList : any;
  isEnquiryReviw = true;
  isEnquiryEdited = false;
  id : any;
  constructor(private dataService : DataService) { }
  getInquiryData(){
    this.dataService.getEnquiryList()  
    .then( data => {
      this.enquiryList = [];
      this.enquiryList = data;
    })
  }

  editInquiry(event,id){
    this.id = this.enquiryList.filter(function(e){return e.inquiry_id == id});
    this.isEnquiryReviw = false;
    this.isEnquiryEdited = true;
  }
  
  acceptInquiry(event,id){
    if(confirm("Are you sure to accept inquiry with id "+id)) {
      let obj ={'id':id};
      this.dataService.updateInqyiryDetails(JSON.stringify(obj)).then(
        requestStatus => {
            if(requestStatus.success === true)
            {
                this.getInquiryData();
            }
            else
            {
              console.log('Error Happened');
            }
        });
    }
  }
  rejectInquiry(event,id){
    if(confirm("Are you sure to reject inquiry with id "+id)) {
      let obj ={'id':id};
      this.dataService.rejectInqyiryDetails(JSON.stringify(obj)).then(
        requestStatus => {
            if(requestStatus.success === true)
            {
                this.getInquiryData();
            }
            else
            {
              console.log('Error Happened');
            }
        });
    }

  }

  onStateChanged(event){
    this.isEnquiryReviw = true;
    this.isEnquiryEdited = event.isCanceled;
    this.getInquiryData();
  console.log(JSON.stringify(event));
  }
  ngOnInit() {
    this.getInquiryData();
  }

}
