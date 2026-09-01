# AU Chat Studio

A mobile-friendly WhatsApp-style AU chat screenshot generator.

## Features

- Private chat and realistic group chat UI.
- Group avatar collage, member list, group info sheet and self-member selector.
- Profile/avatar uploads directly from phone or desktop.
- Chat image uploads directly from device, stored locally in the project state.
- Image captions/text under photos.
- Text, image, voice, link and system-message types.
- Drag-and-drop message ordering.
- Screenshot mode, PNG export/copy, JSON project import/export.
- Live chat playback and WebM recording where browser support allows.
- OpenAI AU writer through a server-side Vercel Function.
- Responsive/mobile-first layout.

## Folder structure

```text
au-chat-studio/
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ app.js
├─ api/
│  └─ ai.js
├─ .env.example
├─ .gitignore
├─ package.json
├─ vercel.json
└─ README.md
```

## OpenAI setup

Do **not** put the API key in `index.html` or `assets/app.js`.

For local development, create `.env.local`:

```env
OPENAI_API_KEY=your_new_key_here
```

Then:

```bash
npm install
npm run dev
```

Open the URL printed by Vercel CLI.

## GitHub + Vercel

1. Create a GitHub repository.
2. Upload/push the whole folder.
3. Import the repository into Vercel.
4. In Vercel Project Settings → Environment Variables, add:
   - Name: `OPENAI_API_KEY`
   - Value: your **new** OpenAI API key
   - Enable it for Production, Preview and Development as needed.
5. Deploy.

The browser calls `/api/ai`; the API key stays server-side.

## Important

The chat project's images are stored in browser LocalStorage as data URLs. This is convenient for screenshots but large projects can hit browser storage limits. For a future production version, move media to Vercel Blob or another object-storage service.

## Recommended security step

The OpenAI key previously pasted into chat should be considered exposed. Create a new key and use only the new key in Vercel Environment Variables.

OpenAI's current model catalog lists GPT-5.6 Sol (`gpt-5.6-sol`, alias `gpt-5.6`), GPT-5.6 Terra (`gpt-5.6-terra`) and GPT-5.6 Luna (`gpt-5.6-luna`). This project defaults to Luna for cost-sensitive AU generation and lets you switch models in the UI.
