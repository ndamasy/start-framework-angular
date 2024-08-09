import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { StartComponent } from "./start/start.component";
// import { PhotosliderComponent } from "./photoslider/photoslider.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FooterComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startframework';
}
