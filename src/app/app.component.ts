import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container grape">
        <app-header></app-header>
      <app-product-list></app-product-list>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
