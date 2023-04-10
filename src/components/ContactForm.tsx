'use client';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/api/contact';

interface IForm {
  from: string;
  subject: string;
  message: string;
}
const DEFAULT_DATA = { from: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<IForm>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // submit시 새로고침을 방지하기위해 사용
    e.preventDefault();

    sendContactEmail(form)
      .then(() => {
        setBanner({ message: '메일을 성공적으로 보냈습니다.', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: '메일 전송에 실패했습니다. 다시 시도해주세요.', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className=" max-w-md w-full">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className=" w-full  flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />
        <button
          className=" bg-yellow-200 rounded-md text-black font-bold hover:bg-yellow-500"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
