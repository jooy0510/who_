import React from "react";

import cx from "classnames";
import Image from "next/image";

interface Props {}

export default function IntroPage() {
  return (
    <div className="max-w-3xl">
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <p>WHO</p>
          <p>SINCE 1999~</p>
        </div>
        <div className="col-span-4">
          <Image src="/images/logo.jpg" width={200} height={200} priority alt="who logo"></Image>
        </div>
        <div className="col-span-4">
          <p>WHO는 이러이러한 응원단입니다.</p>
          <p>펭귄코딩이 만든 홈페이지입니다.</p>
        </div>
      </div>
      <div>
        <h1>수상 목록</h1>
        <div>
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
        <div>
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
        <div>
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
      </div>
      <div>SNS 문의</div>
    </div>
  );
}
