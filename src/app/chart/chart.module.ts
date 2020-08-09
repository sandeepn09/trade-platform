import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartPageRoutingModule } from './chart-routing.module';

import { NgApexchartsModule } from "ng-apexcharts";

import { ChartPage } from './chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule,
    ChartPageRoutingModule
  ],
  declarations: [ChartPage]
})
export class ChartPageModule {}
