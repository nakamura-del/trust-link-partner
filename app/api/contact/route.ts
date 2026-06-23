import { NextResponse } from "next/server";
import { Resend } from "resend";

// 送信先・送信元（ドメイン認証前は onboarding@resend.dev を仮利用）
const TO_EMAIL = "info@trust-link-ptnr.com";
const FROM_EMAIL = "onboarding@resend.dev";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  tel?: string;
  topics?: string[];
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY が設定されていません。");
    return NextResponse.json(
      { error: "メール送信の設定が完了していません。" },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const tel = body.tel?.trim() ?? "";
  const topics = Array.isArray(body.topics) ? body.topics : [];
  const message = body.message?.trim() ?? "";

  // 必須項目（フォーム側の required と揃える）
  if (!name || !email) {
    return NextResponse.json(
      { error: "お名前とメールアドレスは必須です。" },
      { status: 400 }
    );
  }

  const companyLabel = company || "（会社名未記入）";
  const topicsLabel = topics.length > 0 ? topics.join(" / ") : "（選択なし）";
  const messageLabel = message || "（記入なし）";
  const telLabel = tel || "（未記入）";

  const fields: Array<[string, string]> = [
    ["お名前", name],
    ["会社名", companyLabel],
    ["メールアドレス", email],
    ["電話番号", telLabel],
    ["ご相談内容", topicsLabel],
    ["相談内容", messageLabel],
  ];

  const text = fields.map(([label, value]) => `${label}：${value}`).join("\n");

  const html = `
    <div style="font-family: -apple-system, 'Segoe UI', sans-serif; color: #0F172A; line-height: 1.8;">
      <h2 style="font-size: 16px; margin: 0 0 16px;">お問い合わせを受信しました</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${fields
          .map(
            ([label, value]) => `
          <tr>
            <th style="text-align: left; vertical-align: top; padding: 8px 16px 8px 0; white-space: nowrap; color: #727272; font-weight: 600;">${escapeHtml(
              label
            )}</th>
            <td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(
              value
            )}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `お問い合わせフォーム <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `【お問い合わせ】${companyLabel}様より`,
      text,
      html,
    });

    if (error) {
      console.error("Resend 送信エラー:", error);
      return NextResponse.json(
        { error: "メールの送信に失敗しました。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("メール送信中に予期しないエラー:", err);
    return NextResponse.json(
      { error: "メールの送信に失敗しました。" },
      { status: 500 }
    );
  }
}
