import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';

export const routes: Routes = [
    {
        path:"about",
        component:About
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"contact",
        component:Contact
    }
];
