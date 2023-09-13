import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import cx from 'classnames';
import styles from './Contact.module.scss';
import confetti from 'canvas-confetti';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import ModalThanks from './ModalThanks';

interface Props {}

export default function Contact() {
  // const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const handleConfetti = () => {
    confetti({
      origin: {
        x: 0.3,
        y: 0.9,
      },
    });
    confetti({
      origin: {
        y: 0.9,
      },
    });
    confetti({
      origin: {
        x: 0.7,
        y: 0.9,
      },
    });
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold mb-4">찬조 신청</h1>
          <p className="text-sm opacity-50 mx-4">
            찬조, 공연 신청을 위해 아래 정보를 작성해주세요.
          </p>
        </CardHeader>
        <CardBody className="w-full">
          <form
            className="min-w-full flex flex-col gap-4"
            onSubmit={handleSubmit((data) =>
              sendContactEmail(data)
                .then((res) => {
                  reset();
                  handleConfetti();
                  setIsSuccess(true);
                })
                .catch((err) => {})
                .finally(() => onOpen())
            )}
          >
            <Input
              {...register('name', { pattern: /^.{0,20}$/ })}
              isRequired
              isClearable
              type="text"
              label="단체 or 성함"
              labelPlacement="outside"
              placeholder="강남구청 홍길동"
              color={errors.name && 'danger'}
              errorMessage={
                errors.name && '20글자 이내의 단체명을 사용해주세요..!'
              }
              maxLength={20}
            />
            <Input
              {...register('phone', {
                pattern:
                  /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
              })}
              color={errors.phone && 'danger'}
              errorMessage={
                errors.phone && '전화번호 형식에 맞게 입력해주세요..!'
              }
              isRequired
              isClearable
              type="phone"
              label="전화번호"
              labelPlacement="outside"
              placeholder="010-xxxx-xxxx"
            />
            <Input
              {...register('location', {
                pattern: /^.{0,50}$/,
              })}
              color={errors.location && 'danger'}
              errorMessage={errors.location && '50글자 이하로 입력해주세요..!'}
              isRequired
              isClearable
              type="text"
              label="지역"
              labelPlacement="outside"
              placeholder="서울시 강남구"
            />
            <Input
              {...register('date')}
              type="datetime-local"
              label="date"
              labelPlacement="outside"
              placeholder=" "
            />
            <Textarea
              {...register('etc', {
                pattern: /^.{0,1000}$/,
              })}
              color={errors.etc && 'danger'}
              errorMessage={errors.etc && '1000자 이내로 작성해주세요..!'}
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
              isDisabled={isSubmitting}
            >
              이메일 전송
            </Button>
          </form>
        </CardBody>
      </Card>
      <ModalThanks
        isSuccess={isSuccess}
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      ></ModalThanks>
    </div>
  );
}

// export async function sendContactEmail(emailForm: EmailData) {
export async function sendContactEmail(emailForm: any) {
  // Nextjs app 폴더 내 api로 post 요청
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(emailForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }

  return data;
}
