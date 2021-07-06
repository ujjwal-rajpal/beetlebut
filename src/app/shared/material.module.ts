import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    imports : [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule ],
    exports : [ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule ]
})
export class MyMaterialModule{}