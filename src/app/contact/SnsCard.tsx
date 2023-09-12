import React from 'react';

import cx from 'classnames';
import styles from './SnsCard.module.scss';
import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';
import { BsInstagram, BsPhone } from 'react-icons/bs';

interface Props {}

export default function SnsCard() {
  return (
    <div className="w-full max-w-[78rem] p-6 flex flex-col justify-center items-center min-w-[50%]  rounded-2xl">
      <Card className="w-full">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="/images/logo.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">WHO</p>
            <p className="text-small text-default-500 flex justify-start items-center gap-2">
              <BsInstagram></BsInstagram>
              <span>Insta : who_insta_juso</span>
            </p>
            <p className="text-small text-default-500 flex justify-start items-center gap-2">
              <BsPhone></BsPhone>
              <span>phone : 010-0000-0000</span>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-sm">대학생 응원단 WHO</p>
        </CardBody>
      </Card>
    </div>
  );
}
