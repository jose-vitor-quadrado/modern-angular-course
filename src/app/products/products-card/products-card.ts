import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  selector: 'app-products-card',
  styleUrl: './products-card.scss',
  templateUrl: './products-card.html',
})
export class ProductsCard {}
