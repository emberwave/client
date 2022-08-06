export interface PostProps {
  id: string;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  supervotes: number;
  createdAt: any;
}
