'use client';

import React from 'react';

import cx from 'classnames';
import Image from 'next/image';
import SnsCard from 'src/components/SnsCard';
import AwardList from 'src/components/AwardList';

interface Props {}

export default function IntroPage() {
  return (
    <main>
      {/* <head className="w-full">소개</head> */}
      <h2 className="w-full text-2xl">소개</h2>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-4">
          <p>WHO</p>
          <p>SINCE 1999~</p>
        </div>
        <div className="col-span-4">
          <Image
            src="/images/logo.jpg"
            width={200}
            height={200}
            priority
            alt="who logo"
          ></Image>
        </div>
        <div className="col-span-4">
          <p>WHO는 이러이러한 응원단입니다.</p>
          <p>펭귄코딩이 만든 홈페이지입니다.</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-12">
        <div className="col-span-8">
          <AwardList></AwardList>
        </div>
        <div className="col-span-4">
          <SnsCard></SnsCard>
        </div>
      </div>
    </main>
  );
}
