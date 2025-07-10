import { Component } from '@angular/core';
import { ProductListComponent } from '../../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}