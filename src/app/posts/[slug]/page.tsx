import { getPostData } from '@/api/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import React from 'react';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';

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
  const { title, description, date, content, path } = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-200 shadow-lg m-4">
      <Image
        className="w-full max-h-[500px]"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600 ">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className=" w-44 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
