import { Postagens } from './../../interfaces/postagem';
import { NovoPostService } from './../../services/novo-post.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  postagens!: Postagens;

  constructor(private novoPostService: NovoPostService) {}

  ngOnInit(): void {
    this.postagens = this.novoPostService.getNovoPost();
  }

  public like(id: any) {
    this.postagens[id].likes++;
  }
}
