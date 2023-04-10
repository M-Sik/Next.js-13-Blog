import Profile from '@/components/Profile';
import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Profile />
      <section className=" bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          {"'프로그래밍'이라는 게임을 즐기며"} <br />
          열심히 레벨업 하고있는 프론트엔드 개발자 김명식입니다!
        </p>
        <h2 className={TITLE_CLASS}>Carrer</h2>
        <p>
          위드위 (-Now) <br />
          느루 (-2022)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Typescript
          <br />
          Git, VS Code,
        </p>
      </section>
    </>
  );
}
