import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  radioSelecionadaPata="";
  radioSelecionadaCarne="";
  radioSelecionadaGarra="";
  radioSelecionadaDome="";
  radioSelecionadaFlex="";
  radioSelecionadaCauda="";
  radioSelecionadaPesc="";
  radioSelecionadaSava="";
  radioSelecionadaFlor="";
  radioSelecionadaVoa="";
  radioSelecionadaCaca="";
  radioSelecionadaBico="";
  resultado="";

  constructor(private AlertController: AlertController) {}

  adivinharAnimal(){
    if(this.radioSelecionadaPata=="n-pata" && this.radioSelecionadaCarne=="n-carne" && this.radioSelecionadaGarra=="n-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="s-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="n-sava" && this.radioSelecionadaFlor=="s-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="n-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Macaco"
    }
    else if(this.radioSelecionadaPata=="s-pata" && this.radioSelecionadaCarne=="s-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="s-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="n-sava" && this.radioSelecionadaFlor=="n-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="s-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Cachorro"
    }
    else if(this.radioSelecionadaPata=="s-pata" && this.radioSelecionadaCarne=="s-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="s-dome" && this.radioSelecionadaFlex=="s-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="n-sava" && this.radioSelecionadaFlor=="n-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="s-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Gato"
    }
    else if(this.radioSelecionadaPata=="s-pata" && this.radioSelecionadaCarne=="n-carne" && this.radioSelecionadaGarra=="n-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="s-pesc" && this.radioSelecionadaSava=="s-sava" && this.radioSelecionadaFlor=="n-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="n-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é a Girafa"
    }
    else if(this.radioSelecionadaPata=="n-pata" && this.radioSelecionadaCarne=="n-carne" && this.radioSelecionadaGarra=="n-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="n-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="n-sava" && this.radioSelecionadaFlor=="s-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="n-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Gorila"
    }
    else if(this.radioSelecionadaPata=="s-pata" && this.radioSelecionadaCarne=="s-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="s-sava" && this.radioSelecionadaFlor=="n-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="s-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Leão"
    }
    else if(this.radioSelecionadaPata=="s-pata" && this.radioSelecionadaCarne=="s-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="n-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="n-sava" && this.radioSelecionadaFlor=="s-flor" && this.radioSelecionadaVoa=="n-voa" && this.radioSelecionadaCaca=="n-caca" && this.radioSelecionadaBico=="n-bico"){
      this.resultado="O seu animal é o Urso"
    }
    else if(this.radioSelecionadaPata=="n-pata" && this.radioSelecionadaCarne=="n-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="s-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="s-sava" && this.radioSelecionadaFlor=="s-flor" && this.radioSelecionadaVoa=="s-voa" && this.radioSelecionadaCaca=="n-caca" && this.radioSelecionadaBico=="s-bico"){
      this.resultado="O seu animal é o Pássaro"
    }
    else if(this.radioSelecionadaPata=="n-pata" && this.radioSelecionadaCarne=="s-carne" && this.radioSelecionadaGarra=="s-garra" && this.radioSelecionadaDome=="n-dome" && this.radioSelecionadaFlex=="n-flex" && this.radioSelecionadaCauda=="s-cauda" && this.radioSelecionadaPesc=="n-pesc" && this.radioSelecionadaSava=="s-sava" && this.radioSelecionadaFlor=="s-flor" && this.radioSelecionadaVoa=="s-voa" && this.radioSelecionadaCaca=="s-caca" && this.radioSelecionadaBico=="s-bico"){
      this.resultado="O seu animal é o Gavião"
    } else{
      this.resultado="O seu animal não encaixa nas características acima"
    }
    this.exibirAlerta();
  }

  async exibirAlerta(){
    const alert = await this.AlertController.create({
      header: this.resultado,
      buttons: ["OK"]
    })
    await alert.present();
  }
}
