import FeaturedPosts from '@/components/FeaturedPosts';
import Profile from '@/components/Profile';

export const metadata = {
  title: 'devSik 블로그 | 포스트',
  description: '추천 포스트 보기',
};

export default function Home() {
  return (
    <>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </>
  );
}
