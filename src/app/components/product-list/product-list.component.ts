import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Store fetched products
  visibleProducts: number = 6; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Fetch products when the component is initialized
    this.productService.getProducts().subscribe((data: Product[][]) => {
      this.products = data[0]; // Extract the first element from the nested array
      console.log('Products received in component:', this.products); // Log data
    }, error => {
      console.error('Error fetching products:', error); // Handle errors
    });
  }

  loadMore() {
    // Increase the number of visible products by 6
    this.visibleProducts += 6;
  }
}
