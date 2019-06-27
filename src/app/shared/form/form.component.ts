import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  main_account = "Free Checking(4692)"
  moneyTransfers = []
  moneyTransferInput : FormGroup

  constructor(
    private fb : FormBuilder,
    private stateService : StateService
  ){
   }

  ngOnInit() {
    this.moneyTransferInput = this.fb.group({
      from_account:['',[Validators.required]],
      to_account:['',[Validators.required]],
      amount:['',[Validators.required, Validators.pattern("[0-9]*\.?[0-9]*")]]
    })
    this.moneyTransferInput.valueChanges.subscribe(data=>{
      console.log(data)
      if(isNaN(data.amount))
        {
          alert("The amount field is invalid, please enter numbers only.")
        }
    })
  }

  submit(){
    if(!this.moneyTransferInput.valid){
      return alert("Please fill up all fields properly.")
    }
    console.log(this.moneyTransferInput.get('from_account').value)
    console.log(this.moneyTransferInput.get('to_account').value)
    console.log(this.moneyTransferInput.get('amount').value)
    this.moneyTransfers.push({
      id:this.idGenerator(100),
      from_account:this.moneyTransferInput.get('from_account').value,
      to_account:this.moneyTransferInput.get('to_account').value,
      amount:this.moneyTransferInput.get('amount').value
    })
    console.log(this.moneyTransfers)
    localStorage.setItem("moneyTransfers",JSON.stringify(this.moneyTransfers))
  }

  idGenerator(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
