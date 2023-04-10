import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  // 우리 Api Route에 이메일을 전송을 하기 위해 요청을 보냄 fetch
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함');
  }
  return data;
}
