import { Post } from '@/api/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  post: Post;
}

export default function PostCard({ post: { title, description, date, category, path } }: IProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className=" rounded-md bg-red-50 overflow-hidden shadow-lg">
        <Image
          className=" w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center text-center p-4 ">
          <time className="self-end">{date.toString()}</time>
          <h3 className=" text-xl font-bold">{title}</h3>
          <p className=" w-full truncate">{description}</p>
          <span className=" bg-green-100 rounded-lg px-2 text-sm mt-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
