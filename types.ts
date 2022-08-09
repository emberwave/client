export interface PostProps {
  id: string;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  supervotes: number;
  createdAt: any;
  author: UserProps;
}

export interface UserProps {
  id: string;
  tag: string;
  tagNumber: string;
  alias: string;
  bio: string;
  posts: PostProps[];
  createdAt: string;
}
