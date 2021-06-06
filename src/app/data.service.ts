import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, RequestOptions, URLSearchParams,ResponseContentType  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DataService {
 
  constructor(private http: Http) { }

authenticateUser(username: string,password:string):Promise<any>{
    console.log('#### service: username='+username );
    let body = JSON.stringify({
                'username':username,
                'password': password      
            });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/authenticateuser',body, options).toPromise().then(
            response => response.json() as any
        ).catch(this.handleError);
}

registerUser(registrationData):Promise<any>{
  let body = JSON.stringify(registrationData);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:3000/api/userRegistration',body, options).toPromise().then(
          response => response.json() as any
      ).catch(this.handleError);
}

getEnquiryId():any{
  return this.http.get('http://localhost:3000/api/getEnquiryId').toPromise().then(
  response => response.json()
  ).catch(this.handleError);
  }

  getProductList():any{
    return this.http.get('http://localhost:3000/api/getProductList').toPromise().then(
    response => response.json()
    ).catch(this.handleError);
    }

    insertInqyiryDetails(data):Promise<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://localhost:3000/api/insertInqyiryDetails',data, options).toPromise().then(
          response => response.json() as any
      ).catch(this.handleError);
  }

  updateInqyiryDetails(data):Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/updateInqyiryDetails',data, options).toPromise().then(
        response => response.json() as any
    ).catch(this.handleError);
}

modifyInqyiryDetails(data):Promise<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:3000/api/modifyInqyiryDetails',data, options).toPromise().then(
      response => response.json() as any
  ).catch(this.handleError);
}

rejectInqyiryDetails(data):Promise<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:3000/api/rejectInqyiryDetails',data, options).toPromise().then(
      response => response.json() as any
  ).catch(this.handleError);
}


  getEnquiryList():any{
    return this.http.get('http://localhost:3000/api/getEnquiryList').toPromise().then(
    response => response.json()
    ).catch(this.handleError);
    }

    getApprovedList():any{
      return this.http.get('http://localhost:3000/api/getApprovedList').toPromise().then(
      response => response.json()
      ).catch(this.handleError);
      }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}
}
