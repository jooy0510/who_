'use client';

import React from 'react';
import Contact from './Contact';
import SnsCard from './SnsCard';

interface Props {}

export default function SupportPage() {
  return (
    <main className="bg-gray-100">
      {/* <div className="flex flex-col max-w-[78rem] min-w-[15rem] md:flex-row md:items-end"> */}
      <div className="md:grid md:grid-cols-12 md:items-end w-full max-w-[78rem]">
        <div className="col-span-1"></div>
        <div className="col-span-5">
          <Contact></Contact>
        </div>
        <div className="col-span-5">
          <SnsCard></SnsCard>
        </div>
        <div className="col-span-1"></div>
      </div>
    </main>
  );
}
