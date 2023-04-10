import { getPostData } from '@/api/posts';
import React from 'react';
import Image from 'next/image';
import PostContent from '@/components/PostContent';
import AdjacentPostCard from '@/components/AdjacentPostCard';

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
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-200 shadow-lg m-4">
      <Image
        className="w-full max-h-[500px]"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev"></AdjacentPostCard>}
        {next && <AdjacentPostCard post={next} type="next"></AdjacentPostCard>}
      </section>
    </article>
  );
}
