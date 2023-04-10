import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

const LINKS = [
  { icon: <AiFillGithub />, url: 'https://github.com/M-Sik' },
  { icon: <FaBlogger />, url: 'https://sikk.tistory.com/' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>rlaaudtlr233@gmail.com</p>
      <ul className=" flex text-5xl gap-4 mt-3">
        {LINKS.map((link, index) => (
          <a
            key={index}
            target="_blank"
            rel="noreferrer"
            href={link.url}
            className=" hover:text-yellow-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send Me an email</h2>
      <ContactForm />
    </section>
  );
}
