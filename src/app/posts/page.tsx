import { getAllPosts } from '@/api/posts';
import React from 'react';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <div>포스트들!</div>;
}
