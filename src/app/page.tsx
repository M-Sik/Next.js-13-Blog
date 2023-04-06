import CarouselPosts from '@/components/CarouselPosts';
import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export const metadata = {
  title: 'devSik 블로그 | 포스트',
  description: '추천 포스트 보기',
};

export default function Home() {
  console.log('process.env.TEST : ', process.env.TEST);
  console.log('process.env.NEXT_PUBLIC_TEST : ', process.env.NEXT_PUBLIC_TEST);
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPosts />
    </>
  );
}
