'use client';

import React from 'react';
import { Button } from '@nextui-org/button';

const FORM_LIST = [
  { label: '단체, 성함', id: 'name', placeholder: '', multiline: false },
  { label: '전화번호', id: 'phone', placeholder: '', multiline: false },
  { label: '지역', id: 'location', placeholder: '', multiline: false },
  { label: '날짜', id: 'date', placeholder: '', multiline: false },
];

export default function SubmitForm() {
  return (
    <section className="">
      <div className="my-20 w-full max-w-[78rem] p-6 flex flex-col justify-center items-center min-w-[50%]  rounded-2xl">
        <h1 className="text-xl font-bold">찬조 신청</h1>
        <form className="min-w-full flex flex-col  ">
          {FORM_LIST.map((form) => (
            <div
              key={form.id}
              className="my-4 flex justify-between items-center gap-4"
            >
              <label htmlFor={form.id}>{form.label}</label>
              <input
                className="w-2/3 bg-gray-100"
                id="outlined-basic"
                placeholder={form.placeholder}
              />
            </div>
          ))}
          <div className="my-4 flex justify-between items-center gap-4">
            <label htmlFor="요청사항">요청사항</label>
            <textarea
              className="w-2/3 bg-gray-100"
              name="요청사항"
              id="요청사항"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <Button
            className="bg-gradient-to-tr from-purple-500 to-blue-500"
            color="primary"
            variant="shadow"
          >
            submit
          </Button>
        </form>
      </div>
    </section>
  );
}
