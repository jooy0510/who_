import { useEffect, useState } from 'react';
import moment from 'moment';
import { ScheduleItem } from '@/types/NotionApi';

interface Props {}

export default function useCalendar({ list }: { list: any[] }) {
  const [getMoment, setMoment] = useState(moment()); // 오늘
  const today = getMoment; // 오늘

  const todayFirstWeek = today.clone().startOf('month').week(); // 이번달의 첫째 주
  const todayLastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week(); // 이번달의 마지막 주

  const [dayArray, setDayArray] = useState<any>([]); // 날짜들이 가지는 상태값들 모아둔 배열

  useEffect(() => {
    // 고유 인덱스 번호
    let Index = 0;

    // 이번 달 배열에 담기
    let week = todayFirstWeek;
    let result: any = []; // 이번 달 배열
    for (week; week <= todayLastWeek; week++) {
      let weekArray: any[] = []; // 주 별로 배열에 담음
      for (var i = 0; i < 7; i++) {
        // 7번 반복(일주일)
        let days = today
          .clone()
          .startOf('year')
          .week(week)
          .startOf('week')
          .add(i, 'day'); // 그날의 시간 정보
        if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
          // 현재날짜일 경우
          weekArray.push({
            Index: i,
            day: days.format('YYYY-MM-DD'),
            schedules: [],
            work: '',
            tardy: '',
            className: 'text-purple-500',
            css: {
              color: '',
              bgColor: 'lightpink',
              display: '',
            },
            func: {
              onClick: true,
            },
          });
        } else if (days.format('MM') !== today.format('MM')) {
          // 현재 월이 아닐 경우 (클릭옵션 주지 않기 or dispaly none)
          weekArray.push({
            Index: i,
            day: days.format('YYYY-MM-DD'),
            schedules: [],
            work: '',
            tardy: '',
            className: 'opacity-20',
            css: {
              color: '',
              bgColor: 'white',
              display: '',
            },
            func: {
              onClick: true,
            },
          });
        } else {
          weekArray.push({
            Index: i,
            day: days.format('YYYY-MM-DD'),
            schedules: [],
            work: '',
            tardy: '',
            className: '',
            css: {
              color: '',
              bgColor: 'lightgrey',
              display: '',
            },
            func: {
              onClick: true,
            },
          });
        }
        Index++; // monthIndex 값을 1씩 증가
      }
      result.push(weekArray);
    }

    list.forEach((item) => {
      const scheduledDay = item.날짜.date.start;
      setSchedule({ scheduledDay, weeks: result, scheduledItem: item });
    });

    setDayArray(result);
  }, []);

  return {
    getMoment,
    setMoment,
    dayArray,
  };
}
function setSchedule({
  scheduledDay,
  weeks,
  scheduledItem,
}: {
  scheduledDay: string;
  weeks: any[];
  scheduledItem: ScheduleItem;
}) {
  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    for (let j = 0; j < week.length; j++) {
      const day = week[j];
      if (day.day == scheduledDay) {
        weeks[i][j].schedules.push(scheduledItem);
      }
    }
  }
}
