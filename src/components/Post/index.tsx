import { FormEvent } from 'react';
import styles from './styles.module.scss';

interface Post {
  id: string;
  image: string;
  title: string;
  avatar: string;
  author: string;
}

interface PostProps {
  post: Post;
  onDragStart: (e: FormEvent) => void;
}

export function Post({ post }: PostProps) {

  return (
    <div className={styles.postContainer}>
      <img src={post.image} alt={post.title} />
      
      <div className={styles.infoContainer}>
        <h3>{post.title}</h3>
        
        <div className={styles.avatarContainer}>
          <img src={post.avatar} alt={post.author} />
          <h5>{post.author}</h5>
        </div>
      </div>
    </div>
  );
}