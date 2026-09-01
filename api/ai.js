const ALLOWED_MODELS = new Set([
  'gpt-5.6-luna',
  'gpt-5.6-terra',
  'gpt-5.6-sol',
  'gpt-5.6'
]);

const SYSTEM_PROMPT = `Kamu adalah penulis AU WhatsApp Indonesia. Hasilkan dialog seperti chat sungguhan, bukan narasi novel. Output HARUS JSON valid tanpa markdown. Schema: {"title":"...","contactName":"...","status":"online","characters":[{"name":"...","side":"left/right"}],"messages":[{"sender":"Nama","side":"left/right","type":"text","text":"...","time":"22:10","checks":"blue/double/single/","reply":"","caption":""}]}. Untuk group chat, gunakan semua karakter. Pesan pendek, natural, bervariasi, slang ringan bila sesuai. Bangun konflik, reveal, dan cliffhanger. Jangan menambahkan markdown di luar JSON.`;

function json(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(body));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' });
  if (!process.env.OPENAI_API_KEY) return json(res, 500, { error: 'OPENAI_API_KEY belum diatur di Vercel Environment Variables.' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const prompt = String(body.prompt || '').trim();
    const model = ALLOWED_MODELS.has(body.model) ? body.model : 'gpt-5.6-luna';
    const temperature = Math.min(1, Math.max(0, Number(body.temperature ?? 0.8)));

    if (!prompt) return json(res, 400, { error: 'Prompt kosong.' });
    if (prompt.length > 30000) return json(res, 413, { error: 'Prompt terlalu panjang.' });

    const upstream = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model,
        input: [
          { role: 'developer', content: SYSTEM_PROMPT },
          { role: 'user', content: prompt }
        ],
        temperature,
        max_output_tokens: 12000
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      const message = data?.error?.message || `OpenAI returned ${upstream.status}`;
      return json(res, upstream.status, { error: message });
    }

    const text = data?.output_text || data?.output?.flatMap(x => x.content || []).map(x => x.text || '').join('') || '';
    return json(res, 200, { ok: true, text, model });
  } catch (error) {
    console.error('AI route error:', error);
    return json(res, 500, { error: 'Gagal memproses request AI.' });
  }
}
