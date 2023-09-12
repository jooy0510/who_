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

interface Props {}

export default function CalendarTable({ list }: { list: any[] }) {
  const rows = list.map(({ id, properties }, idx, arr) => {
    return { ...properties, key: id };
  });
  const columns = [
    { key: '날짜', label: '날짜' },
    { key: '태그', label: '태그' },
    { key: '이름', label: '이름' },
  ];

  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
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
