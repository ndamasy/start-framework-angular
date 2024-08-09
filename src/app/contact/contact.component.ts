import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HomeComponent, FooterComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  userName: string = '';
  placeholder: string = '';

  changeInput(inputData:any) {
    if(inputData.value ) {
      this.placeholder ='user Name' ;
      console.log('hi')
    }
  }

}
