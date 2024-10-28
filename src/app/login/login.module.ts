import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { LoginPage } from './login.page';
import { InputTextModule } from 'primeng/inputtext';  // Importa los módulos de PrimeNG
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FloatLabelModule,
    FormsModule,  // Asegúrate de importar FormsModule
    IonicModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    InputTextModule,
    ButtonModule
  ],
  declarations: [LoginPage]
})
export class LoginModule { }
