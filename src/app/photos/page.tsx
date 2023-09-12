// 'use client';

import React from 'react';

import cx from 'classnames';
import { NOTION_DATABASE_ID, NOTION_TOKEN } from 'src/config';
import PhotosList from './PhotosList';

interface Props {}

export default async function PhotosPage() {
  const data = await getData();
  return (
    <main>
      <div className="pt-6 flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">WHO 연습 현황</h1>
        <PhotosList list={data}></PhotosList>
      </div>
    </main>
  );
}

async function getData() {
  const { Client } = require('@notionhq/client');

  const notion = new Client({ auth: NOTION_TOKEN });

  return (async () => {
    const databaseId = NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  })();
}
