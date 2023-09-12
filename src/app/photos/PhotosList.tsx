'use client';

import React from 'react';

import cx from 'classnames';
import styles from './PhotosList.module.scss';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import Image from 'next/image';
import Animation from 'src/components/Animation';

interface Props {}

export default function PhotosList({ list }: { list: any[] }) {
  return (
    <div>
      {list.map((item, idx) => (
        <Card key={item.id} className="w-full min-w-[20rem] min-h-[20rem] my-4">
          <CardBody className="w-full h-full flex justify-center items-center">
            {item.cover == null ? (
              <Animation></Animation>
            ) : (
              <Image
                src={item.cover.external.url}
                alt="연습 사진"
                // width={200}
                // height={200}
                fill
              ></Image>
            )}
          </CardBody>
          <CardHeader className="w-full flex flex-col justify-center align-center">
            <span className="font-bold ">
              {item.properties.곡명.title[0].text.content}
            </span>
            <div className={styles.practiceStatus}>
              {item.properties.상태.multi_select.map((status: any) => (
                <Button size="sm" radius="full" key={status.id} className="">
                  {status.name}
                </Button>
              ))}
            </div>
            <span className="max-w-[18rem] text-sm opacity-50">
              {item.properties['인원, 구성'].rich_text[0].plain_text}
              asdfasdfasdfasdfasdfasdfasdfasd
            </span>
          </CardHeader>
          {/* <CardFooter className="flex flex-col justify-center align-center text-sm w-full opacity-50"></CardFooter> */}
        </Card>
      ))}
    </div>
  );
}
