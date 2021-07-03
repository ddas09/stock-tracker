import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './components/stocks/stocks.component';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { UpdateStockComponent } from './components/update-stock/update-stock.component';

const routes: Routes = [
  { path: '', component: StocksComponent},
  { path: 'add-stock', component: AddStockComponent},
  { path: 'update-stock', component: UpdateStockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
