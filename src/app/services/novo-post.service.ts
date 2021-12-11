import { NovoPost } from './../interfaces/novo-post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoPostService {
  private novoPost!: NovoPost;
  constructor() {}

  cadastraNovoPost(novoPost: NovoPost) {
    this.novoPost = novoPost;
  }

  getNovoPost() {
    return {
      code: `for(let i = 0; i < 10, i++){
  console.log('Oi '+i);
}`,
      title: 'O melhor código de JavaScript',
      description: 'Eu aprendi isso na alura',
      type: 'JavaScript',
      background: '#d8c500',
    };
  }
}
