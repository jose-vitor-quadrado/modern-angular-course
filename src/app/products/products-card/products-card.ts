import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../product';

@Component({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  selector: 'app-products-card',
  styleUrl: './products-card.scss',
  templateUrl: './products-card.html',
})
export class ProductsCard {
  readonly product = input.required<Product>();
  readonly addButtonLabel = input('Add to Cart');

  readonly addToCart = output<Product>();

  protected onAddToCart() {
    this.addToCart.emit(this.product());
  }
}
