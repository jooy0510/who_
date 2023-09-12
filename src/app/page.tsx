import { NOTION_CALENDAR_ID, NOTION_TOKEN } from 'src/config';
import Calendar from './Calendar';

export default function Home() {
  return (
    <main>
      <Calendar></Calendar>
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
      // sorts: [
      //   {
      //     property: 'Last ordered',
      //     direction: 'ascending',å
      //   },
      // ],
    });
    console.log(response.results);
    return response.results;
  })();
}
