import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-mis-evaluaciones',
  templateUrl: './mis-evaluaciones.page.html',
  styleUrls: ['./mis-evaluaciones.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class MisEvaluacionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
