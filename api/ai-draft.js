import { CATEGORIES } from '../src/data/categories.js';

const MODEL = 'gemini-3.5-flash-lite';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: '서버에 GEMINI_API_KEY가 설정되어 있지 않아요.' });
    return;
  }

  const draft = typeof req.body?.draft === 'string' ? req.body.draft.trim() : '';
  if (!draft) {
    res.status(400).json({ error: '초안 내용을 입력해 주세요.' });
    return;
  }

  const prompt = `당신은 우리 동네 주민 민원 게시판의 글쓰기 도우미입니다.
주민이 짧게 적은 메모를 바탕으로, 담당자가 상황을 정확히 파악할 수 있는 정식 민원글로 다듬어 주세요.

- title: 무엇이 문제인지 한눈에 알 수 있는 짧은 제목
- content: 언제/어디서/무엇이 불편한지를 정중하고 명확한 문장으로 3~5문장 정도로 작성 (존댓말)
- category: 아래 목록 중 내용과 가장 잘 맞는 것 하나만 정확히 그대로 선택
  ${CATEGORIES.join(', ')}

주민이 적은 메모:
"""
${draft}
"""`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                title: { type: 'STRING' },
                content: { type: 'STRING' },
                category: { type: 'STRING', enum: CATEGORIES },
              },
              required: ['title', 'content', 'category'],
            },
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error', response.status, errorText);
      res.status(502).json({ error: 'AI 초안 생성에 실패했어요.' });
      return;
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      res.status(502).json({ error: 'AI 응답을 읽을 수 없었어요.' });
      return;
    }

    const result = JSON.parse(text);
    res.status(200).json(result);
  } catch (error) {
    console.error('AI draft generation failed', error);
    res.status(500).json({ error: 'AI 초안 생성 중 오류가 발생했어요.' });
  }
}
