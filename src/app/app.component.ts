import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() moneyTransfers
  title = 'money-transfer-app';
  constructor(){}

  ngOnInit(){
    this.moneyTransfers = JSON.parse(localStorage.getItem("moneyTransfers")) ? JSON.parse(localStorage.getItem("moneyTransfers")) : []
  }
}
