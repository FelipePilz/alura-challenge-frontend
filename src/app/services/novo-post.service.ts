import { Postagens } from './../interfaces/postagem';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoPostService {
  private postagens!: Postagens;
  constructor() {}

  cadastraNovoPost(postagens: Postagens) {
    this.postagens = postagens;
  }

  getNovoPost() {
    return [
      {
        code: `for(let i = 0; i < 10, i++){
  console.log('Oi '+i);
}`,
        title: 'O melhor código de JavaScript',
        description: 'Eu aprendi isso na alura',
        type: 'JavaScript',
        background: '#d8c500',
        likes: 12,
        comments: 1,
        userName: 'Alura',
        avatarUrl:
          'https://external-content.duckduckgo.com/ip3/www.alura.com.br.ico',
      },
      {
        code: `.circle {
  display: block;
  background: black;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  margin: 0;
}`,
        title: 'CSS Ball',
        description: 'Make your own ball with CSS',
        type: 'CSS',
        background: '#B2D8D8',
        likes: 3002,
        comments: 1500,
        userName: 'Mark Zuckerberg',
        avatarUrl:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oZJy7I7ZUd3T2OW1bM1lmgHaHa%26pid%3DApi&f=1',
      },
    ];
  }
}
