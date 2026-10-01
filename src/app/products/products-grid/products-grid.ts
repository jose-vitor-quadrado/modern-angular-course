import { Component } from '@angular/core';
import { ProductsCard } from '../products-card/products-card';

@Component({
  imports: [ ProductsCard ],
  selector: 'app-products-grid',
  styleUrl: './products-grid.scss',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {}
