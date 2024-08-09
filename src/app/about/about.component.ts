import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
