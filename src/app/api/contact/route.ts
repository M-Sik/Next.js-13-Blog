import * as yup from 'yup';
const bodySchema = yup.object().shape({
  // from 키는 string 타입에 email형식 그리고 꼭 필요하다는 뜻
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  if (!bodySchema.isValidSync(req.body)) {
    return new Response('유효하지 않은 포맷', { status: 400 });
  }
  //   const { from, subject, message } = req.body;
  // 노드 메일러를 이용하여 메일을 전송하면 됨
}
