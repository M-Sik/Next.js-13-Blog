import { getPostData } from '@/api/posts';
import React from 'react';

interface IProps {
  params: {
    slug: string;
  };
}
// 다이나믹한 메타데이터
// slug에 따라 메타데이터를 바꾸고 싶을때에는 generateMetadata 사용
export function generateMetadata({ params }: IProps) {
  return {
    title: `제품의 이름: ${params.slug}`,
    description: '제품 디스크립션',
    keywords: '제품 블로그',
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
