import { NextResponse } from 'next/server';

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const readTextField = (data: FormData, key: string) => {
  const field = data.get(key);
  return typeof field === 'string' ? field.trim() : '';
};

const isValidEmailFormat = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getFileExtension = (filename: string) => {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot === -1 || lastDot === filename.length - 1) return '';
  return filename.slice(lastDot + 1).toLowerCase();
};

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RECRUITMENT_EMAIL ?? 'contato@vilapetbrasil.com.br';
    const fromEmail =
      process.env.RECRUITMENT_FROM_EMAIL ?? 'Vila Pet Brasil <onboarding@resend.dev>';

    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            'Envio temporariamente indisponível. Envie seu currículo por e-mail para contato@vilapetbrasil.com.br.',
        },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const nome = readTextField(formData, 'nome');
    const telefone = readTextField(formData, 'telefone');
    const email = readTextField(formData, 'email');
    const areaDeInteresse = readTextField(formData, 'areaDeInteresse');
    const mensagem = readTextField(formData, 'mensagem');
    const curriculo = formData.get('curriculo');

    if (!nome || !telefone || !email || !areaDeInteresse) {
      return NextResponse.json(
        { message: 'Preencha todos os campos obrigatórios.' },
        { status: 400 }
      );
    }

    if (!isValidEmailFormat(email)) {
      return NextResponse.json({ message: 'Informe um e-mail válido.' }, { status: 400 });
    }

    if (!(curriculo instanceof File) || curriculo.size === 0) {
      return NextResponse.json({ message: 'Anexe seu currículo para continuar.' }, { status: 400 });
    }

    if (curriculo.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ message: 'O arquivo deve ter no máximo 5MB.' }, { status: 400 });
    }

    const extension = getFileExtension(curriculo.name);
    const mimeType = curriculo.type.toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(extension)) {
      return NextResponse.json(
        { message: 'Envie o currículo em PDF, DOC ou DOCX.' },
        { status: 400 }
      );
    }

    if (!mimeType || !ALLOWED_MIME_TYPES.has(mimeType)) {
      return NextResponse.json(
        { message: 'Envie o currículo em PDF, DOC ou DOCX.' },
        { status: 400 }
      );
    }

    const attachment = Buffer.from(await curriculo.arrayBuffer()).toString('base64');

    const html = `
      <h2>Novo currículo recebido</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(telefone)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Área de interesse:</strong> ${escapeHtml(areaDeInteresse)}</p>
      <p><strong>Mensagem:</strong> ${escapeHtml(mensagem || 'Não informada')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Currículo - ${nome}`,
        html,
        attachments: [
          {
            filename: curriculo.name,
            content: attachment,
          },
        ],
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        {
          message:
            'Não foi possível enviar agora. Tente novamente ou use contato@vilapetbrasil.com.br.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: 'Currículo enviado com sucesso! Obrigado pelo seu interesse.',
    });
  } catch {
    return NextResponse.json(
      {
        message: 'Erro inesperado ao enviar currículo. Tente novamente em alguns instantes.',
      },
      { status: 500 }
    );
  }
}
