import { NovoPostService } from './../../services/novo-post.service';
import { NovoPost } from './../../interfaces/novo-post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  novoPost!: NovoPost;
  background = `#FFFFFF`;

  constructor(private novoPostService: NovoPostService) {}

  ngOnInit(): void {
    this.novoPost = this.novoPostService.getNovoPost();
    this.background = this.novoPostService.getNovoPost().background;
  }
}
