import { GMAIL_APP_PASSWORD, GMAIL_ID } from '@/config';
const nodemailer = require('nodemailer');

export type EmailData = {
  name: string;
  phone: string;
  location: string;
  date?: string;
  etc?: string;
};

export async function POST(req: Request) {
  const body = await req.json();

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: 'sucess' }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.error(error);

      return new Response(JSON.stringify({ message: 'fail' }), {
        status: 500,
      });
    });
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  // 아래 secure 옵션을 사용하려면 465 포트를 사용해야함
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    // 초기에 설정해둔 env 데이터
    user: GMAIL_ID,
    pass: GMAIL_APP_PASSWORD,
  },
});

// export async function sendEmail({ name, phone, location, date }: EmailData) {
export async function sendEmail({
  name,
  phone,
  location,
  date,
  etc,
}: EmailData) {
  const subject = `[찬조신청] ${location} ${name} ${phone}`;
  const to = `${GMAIL_ID}@gmail.com`;
  const from = name;
  const html = `
  <div style='margin:20px;'>
    <h1>찬조신청 메일입니다.</h1>
    <br>
    <div align='center' style='border:1px solid black); font-family:verdana');>
      <div>
        <p>성함, 단체 : ${name}</p>
        <p>전화 번호 : ${phone}</p>
        <p>지역 : ${location}</p>
        <p>날짜 : ${date}</p>
        <p>요청 사항 : ${etc}</p>
      <div>
      <br/>
    </div>
  `;

  return transporter.sendMail({
    to,
    subject,
    from,
    html,
  });
}
