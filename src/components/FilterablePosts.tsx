'use client';

import { Post } from '@/api/posts';
import React, { useState } from 'react';
import PostsGrid from './PostsGrid';

interface IProps {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: IProps) {
  const [seleted, setSeleted] = useState(ALL_POSTS);
  const filtered =
    seleted === ALL_POSTS ? posts : posts.filter((post) => post.category === seleted);

  return (
    <section className="flex gap-8 m-4">
      <article className="!w-[calc(100%+400px)]">
        <PostsGrid posts={filtered} />
      </article>
      <article className="text-center">
        <h2 className=" text-2xl font-bold">Category</h2>
        <ul className="mt-3">
          {[ALL_POSTS, ...categories].map((category) => (
            <li
              onClick={() => setSeleted(category)}
              key={category}
              className={`cursor-pointer mt-1 hover:text-sky-500 ${
                category === seleted && `text-sky-600`
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
