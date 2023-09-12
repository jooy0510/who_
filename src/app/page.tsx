import { NOTION_CALENDAR_ID, NOTION_TOKEN } from 'src/config';
import Calendar from './Calendar';
import CalendarTable from './CalendarTable';
import Kalendar from './Kalendar';

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Kalendar></Kalendar>
      <Calendar list={data}></Calendar>
      <CalendarTable list={data}></CalendarTable>
    </main>
  );
}

async function getData() {
  const { Client } = require('@notionhq/client');

  const notion = new Client({ auth: NOTION_TOKEN });

  return (async () => {
    const databaseId = NOTION_CALENDAR_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  })();
}
