import React from 'react';

import cx from 'classnames';
import styles from './SupportPage.module.scss';
import SubmitForm from 'src/components/SubmitForm';
import SnsCard from 'src/components/SnsCard';

interface Props {}

export default function SupportPage() {
  return (
    <div>
      <h1 className="font-bold text-xl pb-4">찬조 신청</h1>
      <div className="grid grid-cols-12 content-end">
        <div className="col-span-8">
          <SubmitForm></SubmitForm>
        </div>
        <div className="col-span-4">
          <SnsCard
            className={'h-full flex flex-col justify-end items-end'}
          ></SnsCard>
        </div>
      </div>
    </div>
  );
}
