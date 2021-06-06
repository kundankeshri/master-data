const express = require('express');
const router = express.Router();
const userRegistration = require('../controller/registration-controller.js')
var connection = require('../../Connection');

// User Registration starts from here 
// add a new user with details 
router.post("/userRegistration", userRegistration.create);

// User Registration ends from here 

/* GET api listing. */
router.route('/authenticateuser').post(function (req, res) {
  console.log('UserName'+JSON.stringify(req.body.username));
  console.log('UserName'+JSON.stringify(req.params));
   var username = req.param("username");
   var password = req.param("password");
   password = new Buffer(password, 'base64');
   var query ='SELECT * FROM tbl_adim_user_details where user_name=\''+username+'\' and user_full_name = \''+password+'\' ';
   console.log(query);
   connection.query(query, function(error,rows)
   {
       if(!!error)
       {
           console.log(" error" + error);
           res.send(error);
       }
       else
       {
        res.send(rows);
       }
   });
  });


router.route('/getAdminUserDetails').get(function (request, response) {
  var query ='SELECT user_name FROM tbl_adim_user_details';
      connection.query(query, function(error,rows,fields)
      {
          if(!!error)
          {
              console.log(" error" + error);
              response.send(error);
          }
          else
          {
              response.send(rows);
          }
      });
  });

router.route('/getEnquiryId').get(function (request, response) {
var query ='SELECT max(inquiry_id)+1 as latestInquiryId FROM tbl_inquiry_details';
    connection.query(query, function(error,rows,fields)
    {
        if(!!error)
        {
            console.log(" error" + error);
            response.send(error);
        }
        else
        {
            response.send(rows);
        }
    });
});

router.route('/getProductList').get(function (request, response) {
    var query ='SELECT * FROM tbl_product_description';
        connection.query(query, function(error,rows,fields)
        {
            if(!!error)
            {
                console.log(" error" + error);
                response.send(error);
            }
            else
            {
                response.send(rows);
            }
        });
    });

router.route('/insertInqyiryDetails').post(function(req,res)
{
    console.log(JSON.stringify(req.body));
    var date ="";
    if(req.body.orderRecordDate.includes('T')){
        date = req.body.orderRecordDate.substring(0,req.body.orderRecordDate.indexOf('T'));
    }else{
        date = req.body.orderRecordDate;
    }

    let query = 'INSERT INTO tbl_inquiry_details (inquiry_created_date,inquiry_createdBy,inquiry_person_email,tbl_inquiry_productName,tbl_inquiry_productCost,tbl_inquiry_remarks,tbl_inquiry_no_of_product,tbl_inquiry_order_recd_date,tbl_inquiry_order_status,tbl_inquiry_is_inquiry,tbl_inquiry_total_product_cost)'+
    'VALUES(now(),\''+req.body.createdBy+'\',\''+req.body.personDetails+'\',\''+req.body.productName+'\',\''+req.body.productCost+'\',\''+req.body.remarks+'\',\''+req.body.numberOfProduct+'\',\''+date+'\',\''+req.body.orderStatus+'\',1,\''+req.body.totalProductCost+'\')';
    console.log(query);
    connection.query(query,
    function(err,result){
        if(err) {
            console.log('Update error:' + err);
            res.send({message: err});
            return;
        }
        else {
            console.log('Update success');
            res.send({success: true});
        }
    });
});

router.route('/getEnquiryList').get(function (request, response) {
    var query ='SELECT inquiry_id,inquiry_createdBy,inquiry_created_date,inquiry_person_email,tbl_inquiry_productName,tbl_inquiry_productCost,tbl_inquiry_remarks,tbl_inquiry_no_of_product,tbl_inquiry_order_recd_date,tbl_inquiry_order_status,tbl_inquiry_is_inquiry,tbl_inquiry_total_product_cost FROM tbl_inquiry_details where tbl_inquiry_is_inquiry=1';
        connection.query(query, function(error,rows,fields)
        {
            if(!!error)
            {
                console.log(" error" + error);
                response.send(error);
            }
            else
            {
                response.send(rows);
            }
        });
    });
router.route('/getApprovedList').get(function (request, response) {
    var query ='SELECT inquiry_id,inquiry_createdBy,inquiry_created_date,inquiry_person_email,tbl_inquiry_productName,tbl_inquiry_productCost,tbl_inquiry_remarks,tbl_inquiry_no_of_product,tbl_inquiry_order_recd_date,tbl_inquiry_order_status,tbl_inquiry_is_inquiry,tbl_inquiry_total_product_cost FROM tbl_inquiry_details where tbl_inquiry_is_approved=1';
        connection.query(query, function(error,rows,fields)
        {
            if(!!error)
            {
                console.log(" error" + error);
                response.send(error);
            }
            else
            {
                response.send(rows);
            }
        });
    });

router.route('/updateInqyiryDetails').post(function(req,res)
{
    console.log(JSON.stringify(req.body));

    let query = 'update tbl_inquiry_details set tbl_inquiry_is_inquiry=0,tbl_inquiry_is_approved=1 where inquiry_id=\''+req.body.id+'\'';
    console.log(query);
    connection.query(query,
    function(err,result){
        if(err) {
            console.log('Update error:' + err);
            res.send({message: err});
            return;
        }
        else {
            console.log('Update success');
            res.send({success: true});
        }
    });
});

router.route('/rejectInqyiryDetails').post(function(req,res)
{
    console.log(JSON.stringify(req.body));

    let query = 'update tbl_inquiry_details set tbl_inquiry_is_inquiry=0,tbl_inquiry_is_inquiry_rejected=1 where inquiry_id=\''+req.body.id+'\'';
    console.log(query);
    connection.query(query,
    function(err,result){
        if(err) {
            console.log('Update error:' + err);
            res.send({message: err});
            return;
        }
        else {
            console.log('Update success');
            res.send({success: true});
        }
    });
});

router.route('/modifyInqyiryDetails').post(function(req,res)
{
    console.log(JSON.stringify(req.body));
    var date ="";
    if(req.body.orderRecordDate.includes('T')){
        date = req.body.orderRecordDate.substring(0,req.body.orderRecordDate.indexOf('T'));
    }else{
        date = req.body.orderRecordDate;
    }
    let updateBy = 'kundan';
    let query = ' update tbl_inquiry_details set tbl_inquiry_productName= \''+ req.body.productName+'\',tbl_inquiry_productCost=\''+req.body.productCost+'\', '+
    ' tbl_inquiry_remarks=\''+req.body.remarks+'\',tbl_inquiry_no_of_product=\''+req.body.numberOfProduct+'\', '+
    ' tbl_inquiry_order_recd_date=\''+date+'\',tbl_inquiry_order_status=\''+req.body.orderStatus+'\', '+
    ' tbl_inquiry_total_product_cost=\''+req.body.totalProductCost+'\',inquiry_update_date= now(), '+
    ' tbl_inquiry_updatedBy=\''+updateBy+'\' where '+
    ' inquiry_id=\''+req.body.id+'\' ';
        console.log(query);
    connection.query(query,
    function(err,result){
        if(err) {
            console.log('Update error:' + err);
            res.send({message: err});
            return;
        }
        else {
            console.log('Update success');
            res.send({success: true});
        }
    });
});


module.exports = router;
