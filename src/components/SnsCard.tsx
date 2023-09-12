import React from 'react';

import cx from 'classnames';
import styles from './SnsCard.module.scss';
import { BsInstagram } from 'react-icons/bs';

interface Props {}

export default function SnsCard({ className }: { className: string }) {
  return (
    <div className={cx(className)}>
      <div className="flex justify-around items-center gap-2">
        <BsInstagram></BsInstagram>
        <span>who_insta</span>
      </div>
      <div className="flex justify-around items-center gap-2">
        phone<span>010-0000-0000</span>
      </div>
      <div className="flex justify-around items-center gap-2">
        주소 <span>경기도 수원시 영통구 </span>
      </div>
    </div>
  );
}
