import { FormEvent, useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';

import { Post as PostItem } from '../Post';
import { api } from '../../services/api';

import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss';

interface Post {
  id: string;
  image: string;
  title: string;
  avatar: string;
  author: string;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const handleDragStart = (e: FormEvent) => e.preventDefault();

  useEffect(() => {
    api.get('/posts')
      .then(response => response.data)
      .then(result => setPosts(result));
  }, []);

  const items = posts.map(post => (
    <PostItem
      key={post.id}
      post={post}
      onDragStart={handleDragStart}
    />
  ));

  return (
    <section className={styles.blogContainer}>
      <div className={styles.blogTitle}>
        <h2>Read Our Blog</h2>
        <span>Far far away, behind the word mountains, far from the countries</span>
        <span>Vokalia and Consonantia, there live the blind texts.</span>
      </div>

      <div className={styles.containerCarousel}>
        <Carousel
          swipeable={false}
          draggable={true}
          responsive={responsive}
          ssr={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          >
          {posts && posts.map(post => (
            <PostItem
            key={post.id}
            post={post}
            onDragStart={handleDragStart}
            />
            ))}
        </Carousel>
      </div>

    </section>
  );
}