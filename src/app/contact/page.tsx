'use client';

import React from 'react';
import Contact from './Contact';
import SnsCard from './SnsCard';

interface Props {}

export default function SupportPage() {
  return (
    <main className=" bg-gray-100">
      <div className="flex flex-col max-w-[78rem] min-w-[15rem] md:flex-row md:items-end">
        <Contact></Contact>
        <SnsCard></SnsCard>
      </div>
    </main>
  );
}
