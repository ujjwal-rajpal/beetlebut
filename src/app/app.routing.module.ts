import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AuthModule } from './auth/auth.module';
const routes :Routes = [
    { path: '', loadChildren: ()=> AuthModule }
]
@NgModule({
    declarations: [],
    imports:[CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]

})

export class AppRoutingModule{}

