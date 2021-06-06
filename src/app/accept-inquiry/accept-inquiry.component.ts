import { Component, OnInit,Output,EventEmitter,Input} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-accept-inquiry',
  templateUrl: './accept-inquiry.component.html',
  styleUrls: ['./accept-inquiry.component.css'],
  providers : [DataService]
})
export class AcceptInquiryComponent implements OnInit {
  
  productName : any;
  enquiryDate : any;
  productList : any;
  productPrice : any;
  noOfUnits = 1;
  isDisabled = true;
  totalProductPrice = 0;
  remarks = '';
  status = '';
  recordDate : any;
  @Input() submittedListOfData: any;
  @Output()
      sendDataBackButtonEvent : EventEmitter <any> = new EventEmitter <any>();
  constructor(private dataService : DataService) { }
  getProductList(){
    this.dataService.getProductList()  
    .then( data => {
      this.productList = data;
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
  enquiryCancel(){
    let obj ={'isCanceled' : false};
    this.sendDataBackButtonEvent.emit(obj);
  }

  enquirySubmit(){
    var obj ={
      'id': this.submittedListOfData[0].inquiry_id,
      'productName':this.productName,
      'productCost':this.productPrice,
      'remarks':this.remarks,
      'numberOfProduct':this.noOfUnits,
      'orderRecordDate':this.recordDate,
      'orderStatus':this.status,
      'totalProductCost':this.totalProductPrice
    }
    this.dataService.modifyInqyiryDetails(JSON.stringify(obj)).then(
      requestStatus => {
          if(requestStatus.success === true)
          {
            let obj ={'isCanceled' : false};
            (document.getElementById("save") as HTMLElement).style.display = "block";
              setTimeout(()=>{ 
                (document.getElementById("save") as HTMLElement).style.display = "none";
                this.sendDataBackButtonEvent.emit(obj);
           }, 3000);
             
            }
          else
          {
            console.log('Error Happened');
          }
      });
  }

  ngOnInit() {
    this.productName =this.submittedListOfData[0].tbl_inquiry_productName;
    this.enquiryDate = this.submittedListOfData[0].inquiry_created_date;
    this.productPrice = this.submittedListOfData[0].tbl_inquiry_productCost;
    this.noOfUnits =  this.submittedListOfData[0].tbl_inquiry_no_of_product;
    if(this.noOfUnits == 1){
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
    this.totalProductPrice = this.submittedListOfData[0].tbl_inquiry_total_product_cost;
    this.remarks = this.submittedListOfData[0].tbl_inquiry_remarks;
    this.status = this.submittedListOfData[0].tbl_inquiry_order_status;
    this.recordDate = this.submittedListOfData[0].tbl_inquiry_order_recd_date;
    console.log(JSON.stringify(this.submittedListOfData));
    this.getProductList();
  }

}
