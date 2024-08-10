import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
    {path:'StartFramework' , title:'Home', component:StartComponent},
    {path:'about' , title:'About', component:AboutComponent},
    {path:'portfolio' , title:'Portfolio', component:PortfolioComponent},
    { path: 'contact', title: 'Contact', component: ContactComponent },
    {path:'' , title:'Not Found' , component: NotFoundComponent}
];
