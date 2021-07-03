import { Component } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Stock } from '../../Stock';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css']
})
export class UpdateStockComponent {
  stock: Stock = {};
  error: string = '';
  info: string = '';

  constructor(private restServer: RestService) { }

  getStockDetails(): void {
    if (!this.stock.id) {
      this.stock = {};
      return;
    }

    this.restServer.getStockById(this.stock)
      .subscribe(
        (stock: Stock) => this.stock = stock,
        (err) => this.error = err.message,
        () => this.error = ''
      );
  }
  
  updateStock(): void {
    this.restServer.updateStock(this.stock)
      .subscribe(
        () => this.info = "Successfully updated stock details",
        (err) => this.error = err.message,
        () => this.stock = {}
      );

    setTimeout(() => {
      this.info = this.error = '';
    }, 3000);
  }
}
