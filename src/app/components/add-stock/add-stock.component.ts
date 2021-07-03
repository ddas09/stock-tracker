import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Stock } from '../../Stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {
  stock: Stock = {};
  error: string = '';
  info: string = '';

  constructor(private restServer: RestService) { }

  addStock(): void {
    this.restServer.addStock(this.stock)
      .subscribe(
        () => this.info = "Stock successfully added",
        (err) => this.error = err.message,
        () => this.stock = {}
      );

    setTimeout(() => {
      this.info = this.error = '';
    }, 3000);
  }
}
