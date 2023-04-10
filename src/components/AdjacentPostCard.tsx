import { Post } from '@/api/posts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IProps {
  post: Post;
  type: 'prev' | 'next';
}

const ICON_CLASS = 'text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl';

export default function AdjacentPostCard({ post: { path, title, description }, type }: IProps) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-40"
      />
      <div className="group flex text-white w-full justify-around items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8">
        {type === 'prev' && <FaArrowLeft className={ICON_CLASS}></FaArrowLeft>}
        <div className="w-full text-center">
          <h3 className=" text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === 'next' && <FaArrowRight className={ICON_CLASS}></FaArrowRight>}
      </div>
    </Link>
  );
}
