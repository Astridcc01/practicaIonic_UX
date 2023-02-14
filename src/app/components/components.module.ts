import { MillerComponent } from './miller/miller.component';
import { PrincipioCierreComponent } from './principio-cierre/principio-cierre.component';
import { EfectoVRComponent } from './efecto-vr/efecto-vr.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MillerComponent, PrincipioCierreComponent, EfectoVRComponent],
  imports: [
    CommonModule, IonicModule
  ], exports: [MillerComponent, PrincipioCierreComponent, EfectoVRComponent],
})
export class ComponentsModule { }
