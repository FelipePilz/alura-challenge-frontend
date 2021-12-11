import { Postagens } from './../../interfaces/postagem';
import { NovoPostService } from './../../services/novo-post.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  novaPostagem!: FormGroup;

  @Input() color?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private novoPostService: NovoPostService
  ) {}

  ngOnInit(): void {
    this.color = '#6bd1ff';

    this.novaPostagem = this.formBuilder.group({
      code: [
        `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`,
      ],
      title: [''],
      description: [''],
      type: ['JavaScript'],
      background: ['#6bd1ff'],
    });
  }

  public trocaCor(color: string) {
    this.color = color;
  }

  public cadastrar() {
    const novoPost = this.novaPostagem.getRawValue() as Postagens;
    this.router.navigate(['comunidade']);
  }
}
