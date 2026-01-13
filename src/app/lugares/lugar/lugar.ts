import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Categoria } from '../../categorias/categoria-model';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss',
})
export class Lugar implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaSevice: CategoriaService,
    private  service: LugarService
  ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      Categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoriaSevice.obterTodas().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias
    })
  }

  salvar(){
   this.service.salvar(this.camposForm.value)
   .subscribe({
     next: (lugar) => {
      console.log("Cadastrado com sucesso!", lugar);
      this.camposForm.reset();
     },
     error: erro => console.error('Ocorreu um erro: ', erro)
   })
  }

}
