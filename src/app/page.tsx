import { NOTION_CALENDAR_ID, NOTION_TOKEN } from 'src/config';
import { ScheduleItem } from '@/types/Schedules';
import Calendar from '@/components/calendar/Calendar';
import CalendarTable from '@/components/calendar/CalendarTable';

export default async function Home() {
  const list = await getData();
  console.log('###list');
  console.log(list);

  return (
    <main>
      <Calendar list={list}></Calendar>
      <CalendarTable list={list}></CalendarTable>
    </main>
  );
}

async function getData() {
  const { Client } = require('@notionhq/client');
  const moment = require('moment');

  const notion = new Client({ auth: NOTION_TOKEN });

  return (async () => {
    const databaseId = NOTION_CALENDAR_ID;
    console.log();
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: '날짜',
        date: { on_or_after: moment().format('YYYY-MM-01') },
      },
      sorts: [
        {
          property: '날짜',
          direction: 'ascending',
        },
      ],
    });

    const results: any[] = response.results;
    const list: ScheduleItem[] = results.map(({ id, properties }, idx, arr) => {
      return { ...properties, key: id };
    });

    return list;
  })();
}
