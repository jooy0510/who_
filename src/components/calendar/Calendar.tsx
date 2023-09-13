'use client';

import React, { useEffect, useState } from 'react';

import cx from 'classnames';
import styles from '@/styles/Calendar.module.scss';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  Tooltip,
} from '@nextui-org/react';
import moment from 'moment';
import useCalendar from '@/components/hooks/useCalendar';
import { ScheduleItem } from '@/types/Schedules';

interface Props {}

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calendar({ list }: { list: ScheduleItem[] }) {
  const { getMoment, setMoment, dayArray } = useCalendar({ list });
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="max-w-[21rem]">
        <CardBody>
          <h2 className="font-[500] text-lg pb-2">
            {getMoment.year()}년{getMoment.month() + 1}월 스케쥴
          </h2>
          <div className={cx(styles.calendarHeader)}>
            {DAYS.map((day) => {
              return (
                <p key={day} className={cx(styles.calendarHeaderCell)}>
                  {day}
                </p>
              );
            })}
          </div>
          <div className={cx(styles.calendarBody)}>
            {dayArray.map((week: any, idx: number) => (
              <CalendarWeek key={idx} week={week}></CalendarWeek>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function CalendarWeek({ week }: { week: any[] }) {
  return (
    <div className={cx(styles.row)}>
      {week.map((day, idx) => {
        return (
          <div key={day.index} className={cx(styles.cell)}>
            <p className={cx(styles[`cell-${DAYS[idx]}`], day.className)}>
              {day.day.split('-')[2]}
            </p>
            <p className={cx('text-xs overflow-hidden', day.className)}>
              {day.schedules.map((schedule: any) => {
                console.log(schedule);
                return (
                  <Tooltip
                    key={'foreground'}
                    color={'default'}
                    content={schedule.이름.title[0].plain_text}
                    className="capitalize"
                  >
                    <Chip
                      key={schedule.key}
                      size="sm"
                      color="secondary"
                      classNames={{
                        base: 'p-[0.1rem] h-[1rem] rounded-none ',
                        // base: 'p-[0.1rem] h-[0.75rem] rounded-none bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                        content:
                          'drop-shadow shadow-black text-white text-[0.6rem]',
                      }}
                    >
                      {schedule.이름.title[0].plain_text}
                    </Chip>
                  </Tooltip>
                );
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
