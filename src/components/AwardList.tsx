import React from 'react';

import cx from 'classnames';
import styles from './AwardList.module.scss';

interface Props {}

export default function AwardList() {
  return (
    <div>
      <h1>수상 목록</h1>
      <div className="w-full flex justify-between">
        <div className="w-full flex flex-col">
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
        <div className="w-full flex flex-col">
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
        <div className="w-full flex flex-col">
          <span>수상목록 1</span>
          <span>수상목록 2</span>
          <span>수상목록 3</span>
          <span>수상목록 4</span>
          <span>수상목록 5</span>
        </div>
      </div>
    </div>
  );
}
