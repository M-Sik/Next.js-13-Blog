import React from 'react';
import Image from 'next/image';
import profileImg from '../../public/images/profile.jpeg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="text-center">
      <div>
        {/* <Image
          src={profileImg}
          alt="프로필 이미지"
          width={250}
          height={250}
          className=" rounded-full m-auto"
          priority
        /> */}
        <Image
          fill={true}
          src={profileImg}
          alt="프로필 이미지"
          className=" rounded-full m-auto !w-64 !relative aspect-square "
          priority
        />
      </div>
      <h2 className=" text-2xl font-bold mt-2">{"Hi, I'm DevSik"}</h2>
      <h3 className=" text-lg font-bold mt-2">Front-End Engineer</h3>
      <p className="mt-2">{"'프로그래밍' 이라는 게임을 즐기는 개발자"}</p>
      <button className=" bg-yellow-500 rounded-lg py-1 px-2 font-bold mt-2">
        <Link href="/contact">Contact Me</Link>
      </button>
    </section>
  );
}
