import { getNonFeaturedPosts } from '@/api/posts';
import React from 'react';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2 className=" text-2xl font-bold my-2 mt-20">다른 게시글도 보세요!</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
