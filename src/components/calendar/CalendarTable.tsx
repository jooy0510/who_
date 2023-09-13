'use client';

import React from 'react';

import cx from 'classnames';
import styles from '.@/styles/CalendarTable.module.scss';
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
import { ScheduleItem } from '@/types/Schedules';

interface Props {}

export default function CalendarTable({ list }: { list: ScheduleItem[] }) {
  const columns = [
    { key: '날짜', label: '날짜' },
    { key: '태그', label: '태그' },
    { key: '이름', label: '이름' },
  ];

  return (
    <div className="w-[23rem] max-w-[78rem] md:p-6 flex flex-col justify-center items-center rounded-2xl">
      <Table
        className="max-w-[20rem]"
        aria-label="Example table with dynamic content"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={list}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => {
                const data = getKeyValue(item, columnKey);
                if (data.type == 'title') {
                  return <TableCell>{data.title[0].plain_text}</TableCell>;
                } else if (data.type == 'date') {
                  return <TableCell>{data.date.start}</TableCell>;
                }
                return (
                  <TableCell>
                    {data.multi_select &&
                      data.multi_select.map(
                        ({ name, key }: { name: string; key: string }) => (
                          <span key={key}>{name}</span>
                        )
                      )}
                  </TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
