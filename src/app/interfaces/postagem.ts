interface Postagem {
  id: number;
  code: string;
  title: string;
  description: string;
  type: string;
  background: string;
  likes: number;
  comments: number;
  userName: string;
  avatarUrl: string;
}

export type Postagens = Array<Postagem>;
