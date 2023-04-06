import { getPostData } from '@/api/posts';
import React from 'react';

interface IProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: IProps) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
