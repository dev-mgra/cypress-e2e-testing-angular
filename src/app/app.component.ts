import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cypress-e2e-testing-angular';

  constructor(public router: Router) { }

  public navPage() {
    this.router.navigate(['/page1']);
  }
}
