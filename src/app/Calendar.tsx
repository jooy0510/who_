'use client';

import React from 'react';

import cx from 'classnames';
import styles from './Calendar.module.scss';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

interface Props {}

export default function Calendar() {
  return (
    <Card>
      <CardHeader>캘린더 페이지</CardHeader>
      <CardBody>카드바디</CardBody>
      <CardFooter>카드푸터</CardFooter>
    </Card>
  );
}
