import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        CommonModule
        , FormsModule
        , HttpModule
        , RouterModule
    ],
    exports: [],
    providers: [],
})
export class ProductModule { }
