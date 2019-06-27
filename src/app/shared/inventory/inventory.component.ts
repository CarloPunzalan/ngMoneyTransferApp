import { Component, OnInit, Input } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() moneyTransfers
  constructor(private stateService : StateService) { }

  ngOnInit() {
  }

}
