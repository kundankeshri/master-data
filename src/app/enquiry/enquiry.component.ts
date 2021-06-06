import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
  providers : [DataService]
})
export class EnquiryComponent implements OnInit {

  constructor(private router: Router,private dataService : DataService) { }
  enquiryId : any ;
  productName ='AC';
  productList : any;
  productPrice : any;
  noOfUnits = 1;
  isDisabled = true;
  totalProductPrice = 0;
  remarks = '';
  status = '';
  recordDate : Date;
  enquiryDate : Date;
  //((new Date().getMonth())+1)+'/'+new Date().getDate()+'/'+new Date().getFullYear();
  getEnquiryId(){
    this.dataService.getEnquiryId()  
    .then( data => {
      this.enquiryId = data[0].latestInquiryId;
    console.log(JSON.stringify(this.enquiryId));
    })
  }
  getProductList(){
    this.dataService.getProductList()  
    .then( data => {
      this.productList = data;
      this.productPrice = data[0].tbl_product_price;
      this.totalProductPrice = data[0].tbl_product_price;
      this.isDisabled = true; 
    console.log(JSON.stringify(this.productList));
    })
  }
  searchPrice(event){
    this.productName = event.target.value;
    this.productPrice = '';
    this.productPrice = this.productList.filter(function(e){return e.tbl_product_name === event.target.value})[0].tbl_product_price;
    this.totalProductPrice = this.productPrice;
    this.noOfUnits = 1;
  }
  addingNumberOfUnit(){
    this.totalProductPrice = this.productPrice;
    if(this.noOfUnits > 0){
      this.isDisabled = false; 
    }
    this.noOfUnits = this.noOfUnits + 1;
    this.totalProductPrice = this.totalProductPrice * this.noOfUnits;
  }
  subNumberOfUnit(){
    this.totalProductPrice = this.productPrice;
    this.noOfUnits = this.noOfUnits - 1;
    this.totalProductPrice = this.totalProductPrice * this.noOfUnits;
    if(this.noOfUnits == 1){
      this.isDisabled = true;
    }
  }
  enquirySubmit(){
    var obj ={
      'createdBy':'Kundan',
      'personDetails':'keshrikundan666@gmail.com',
      'productName':this.productName,
      'productCost':this.productPrice,
      'remarks':this.remarks,
      'numberOfProduct':this.noOfUnits,
      'orderRecordDate':this.recordDate,
      'orderStatus':this.status,
      'isInquiry':true,
      'totalProductCost':this.totalProductPrice
    }
    console.log(JSON.stringify(obj));
    this.dataService.insertInqyiryDetails(JSON.stringify(obj)).then(
      requestStatus => {
          if(requestStatus.success === true)
          {
            (document.getElementById("save") as HTMLElement).style.display = "block";
              var timePeriodInMs = 2000;
              setTimeout(()=>
              {
                  (document.getElementById("save") as HTMLElement).style.display = "none";
                  this.router.navigate(['/enquiryReviewComponent']);
                },
              timePeriodInMs);
          }
          else
          {
            console.log('Error Happened');
          }
      });

  }
  ngOnInit() {
    this.enquiryDate = new Date();
    this.recordDate = new Date(); 
    this.getEnquiryId();
    this.getProductList();
    
  }

}
