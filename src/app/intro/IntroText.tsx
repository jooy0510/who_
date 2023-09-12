'use client';

import React from 'react';

import cx from 'classnames';
import styles from './IntroText.module.scss';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

interface Props {}

export default function IntroText() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardBody className="text-sm">
          <p>안녕하세요, WHO입니다. 저희는 이런 사람들입니다.</p>
          <p>이런 이런 것들이 있습니다. 안녕하세요, 저는 이런사람이에요.</p>
          <p>WHO는 칼군무를 자랑합니다.</p>
          <p>화이팅~!!!</p>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
