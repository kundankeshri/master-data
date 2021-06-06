import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OrderAcknowledgmentComponent } from './order-acknowledgment/order-acknowledgment.component';
import { OAAmendmentComponent } from './oa-amendment/oa-amendment.component';
import { EnquiryReviewComponent } from './enquiry-review/enquiry-review.component';
import { MonitoringSalesProcessComponent } from './monitoring-sales-process/monitoring-sales-process.component';
import { ContractReviewComponent } from './contract-review/contract-review.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { AckOrderComponent } from './ack-order/ack-order.component';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { AcceptInquiryComponent } from './accept-inquiry/accept-inquiry.component';
import { RejectInquiryComponent } from './reject-inquiry/reject-inquiry.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    OrderAcknowledgmentComponent,
    OAAmendmentComponent,
    MonitoringSalesProcessComponent,
    EnquiryReviewComponent,
    ContractReviewComponent,
    EnquiryComponent,
    AcceptInquiryComponent,
    RejectInquiryComponent,
    OrderReviewComponent,
    AckOrderComponent,
    QuestionnaireComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
