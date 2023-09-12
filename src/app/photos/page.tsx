'use client';

import React from 'react';

import cx from 'classnames';
import styles from './PhotosPage.module.scss';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

interface Props {}

export default function PhotosPage() {
  return (
    <div>
      <Card>
        <CardHeader>버터플라이(릴레이, 액션)</CardHeader>
        <CardBody></CardBody>
        <CardFooter>
          <div className={styles.practiceStatus}></div>
          소정, 은영, 미진, 진아, 주영, 다현, 혜령, 진서, 강민
        </CardFooter>
      </Card>
      <h1>PhotosPage</h1>
    </div>
  );
}
