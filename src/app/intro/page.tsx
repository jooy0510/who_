import React from 'react';

import cx from 'classnames';
import Image from 'next/image';
import IntroCard from './IntroCard';
import SnsCard from '../contact/SnsCard';
import AwardList from './AwardList';
import IntroText from './IntroText';

interface Props {}

export default function IntroPage() {
  return (
    <main>
      <div className="pt-4"></div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <IntroCard></IntroCard>
        </div>
        <div className="col-span-6">
          <IntroText></IntroText>
        </div>
        <div className="col-span-12">
          <AwardList></AwardList>
        </div>
        <div className="col-span-6">
          <SnsCard></SnsCard>
        </div>
        {/* <div className="col-span-12"></div> */}
      </div>
    </main>
  );
}
