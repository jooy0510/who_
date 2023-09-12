'use client';

import React from 'react';

import cx from 'classnames';
import styles from './SupportPage.module.scss';
import SubmitForm from 'src/components/ContactForm';
import SnsCard from 'src/components/SnsCard';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from '@nextui-org/react';
import { BsInstagram } from 'react-icons/bs';

interface Props {}

export default function SupportPage() {
  return (
    <div className="flex flex-col max-w-[78rem] min-w-[15rem]">
      <div className="mt-16 w-full max-w-[78rem] p-6 flex flex-col justify-center items-center min-w-[50%]  rounded-2xl">
        <Card>
          <CardHeader>
            <h1 className="text-xl font-bold mb-4">찬조 신청</h1>
          </CardHeader>
          <CardBody>
            <form className="min-w-full flex flex-col gap-4 ">
              <Input
                type="text"
                label="단체 or 성함"
                labelPlacement="outside"
                placeholder=" "
              />
              <Input
                type="phone"
                label="전화번호"
                labelPlacement="outside"
                placeholder=" "
              />
              <Input
                type="text"
                label="지역"
                labelPlacement="outside"
                placeholder=" "
              />
              <Input
                type="date"
                label="date"
                labelPlacement="outside"
                placeholder=" "
              />
              <Textarea
                label="요청사항"
                labelPlacement="outside"
                placeholder=" "
                className="max-w-xs"
              />

              <Button
                className="bg-gradient-to-tr from-purple-500 to-blue-500"
                color="primary"
                variant="shadow"
              >
                submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>

      <div className={cx('h-full flex flex-col justify-end items-end')}>
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
    </div>
  );
}
