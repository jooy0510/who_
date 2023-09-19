'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';

interface Props {}

export default function AwardList() {
  return (
    <div className="w-full max-w-[78rem] p-2 md:p-6 flex flex-col justify-center items-center min-w-[50%] rounded-2xl">
      <Card className="w-full">
        <CardHeader className="font-bold text-lg">
          <h2>수상 실적 🏅</h2>
        </CardHeader>
        <Divider></Divider>
        <CardBody className="grid grid-cols-12 text-sm">
          <div className="col-span-6">
            <p>🥇제4회 마이스터예술제 대상</p>
            <p>🥉제6회 마이스터예술제 동상</p>
            <p>🥈청소년 동아리 경연대회 우수상</p>
            <p>🥇우리끼리 페스티벌 경연대회 금상</p>
            <p>🎖️제2회 올림피아드 치어리딩대회 특별상</p>
          </div>
          <div className="col-span-6">
            <p>🥇청소년 동아리축제 최우수상</p>
            <p>🥇제2회 경기도청소년동아리경연대회 대상</p>
            <p>🥇제2회 수원시청소년동아리경연대회 대상</p>
            <p>🥈경기 청소년 댄스 경연대회 은상</p>
            <p>🎖️경기 청소년 댄스 경연대회 특별상</p>
          </div>
        </CardBody>
        <Divider></Divider>
        <CardFooter>15개 수상</CardFooter>
      </Card>
    </div>
  );
}
