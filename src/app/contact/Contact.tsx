import React from 'react';

import cx from 'classnames';
import styles from './Contact.module.scss';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
} from '@nextui-org/react';

interface Props {}

export default function Contact() {
  return (
    <div className="w-full max-w-[78rem] p-6 flex flex-col justify-center items-center min-w-[50%]  rounded-2xl">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold mb-4">찬조 신청</h1>
          <p className="text-sm opacity-50 mx-4">
            찬조, 공연 신청을 위해 아래 정보를 작성해주세요.
          </p>
        </CardHeader>
        <CardBody>
          <form className="min-w-full flex flex-col gap-4 ">
            <Input
              isRequired
              isClearable
              type="text"
              label="단체 or 성함"
              labelPlacement="outside"
              placeholder="강남구청 홍길동"
            />
            <Input
              isRequired
              isClearable
              type="phone"
              label="전화번호"
              labelPlacement="outside"
              placeholder="010-xxxx-xxxx"
            />
            <Input
              isRequired
              isClearable
              type="text"
              label="지역"
              labelPlacement="outside"
              placeholder="서울시 강남구"
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
              placeholder="요청사항을 적어주세요."
              className="w-full"
              rows={3}
            />

            <Button
              type="submit"
              className="bg-gradient-to-tr from-purple-500 to-blue-500"
              color="primary"
              variant="shadow"
            >
              이메일 전송
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
