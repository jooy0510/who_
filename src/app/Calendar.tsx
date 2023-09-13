'use client';

import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import styles from './Calendar.module.scss';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';
import moment from 'moment';
import useCalendar from '@/components/hooks/useCalendar';

interface Props {}

export default function Calendar({ list }: { list: any[] }) {
  const { getMoment, setMoment, dayArray } = useCalendar();

  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader>캘린더 페이지</CardHeader>
        <CardBody>
          {['일', '월', '화', '수', '목', '금', '토'].map((day) => {
            return (
              <div key={day} className="flex">
                <p>{day}</p>
              </div>
            );
          })}
          {/* {dayArray.map((week) => )} */}
          <div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          카드바디
        </CardBody>
        <CardFooter>카드푸터</CardFooter>
      </Card>
    </div>
  );
}
