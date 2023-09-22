import { NOTION_DATABASE_ID_2, NOTION_TOKEN } from 'src/config';
import DriveList from './DriveList';
import { NotionDatabaseResults } from '@/types/NotionApi';

export default async function DrivePage() {
    const data: NotionDatabaseResults[] = await getData();
    return (
      <main>
        <div className="pt-6 flex flex-col justify-center items-center">
          <h1 className="font-bold text-lg">WHO 공연 목록</h1>
          <DriveList list={data}></DriveList>
        </div>
      </main>
    );
  }
  
  async function getData() {
    const options = {
      next: { revalidate: 60 },
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${NOTION_TOKEN}`,
      },
      body: JSON.stringify({ page_size: 100 }),
    };
    const response = await fetch(
      `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID_2}/query`,
      options
    );
    const data = await response.json();
    return data.results;
  }
