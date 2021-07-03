import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from 'src/app/services/rest.service';
import { Stock } from '../../Stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stocks: Stock[] = [];
  displayedColumns: string[] = ["id", "symbol", "name", "price", "action"];
  dataSource!: MatTableDataSource<Stock>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private restServer: RestService) { }

  ngOnInit(): void {
    this.restServer.getAllStocks()
      .subscribe(
        (stocks: Stock[]) => this.stocks = stocks,
        () => alert("Server error"),
        () => {
          this.dataSource = new MatTableDataSource(this.stocks);
          this.dataSource.paginator = this.paginator;
        }  
      );
  }

  deleteStock(stock: Stock): void {
    this.restServer.deleteStock(stock)
      .subscribe(
        () => {
          this.stocks = this.stocks.filter(s => s.id !== stock.id);
          this.dataSource = new MatTableDataSource(this.stocks);
          this.dataSource.paginator = this.paginator;
        }  
      );
  }
}
