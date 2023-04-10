import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function Banner({ banner: { message, state } }: { banner: BannerData }) {
  // state 가 'success'이면 true
  const isSuccess = state === 'success';
  const icon = isSuccess ? '😃' : '😭';
  return (
    <p
      className={`p-2 ${isSuccess ? 'bg-green-300' : 'bg-red-300'} rounded-lg w-full text-center`}
    >{`${icon} ${message}`}</p>
  );
}
