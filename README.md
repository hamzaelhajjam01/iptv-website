<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1O7BxX_TxUxJrgcTFSJ6_8I8MMeP7i4r5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
 
## Environment variables

This project requires a Gemini API key for server-side AI calls. Keep secrets out of source control.

- Copy `.env.example` to `.env.local` and fill in your real key:

```bash
copy .env.example .env.local
# then open .env.local and replace the placeholder
```

- The app expects the key as `GEMINI_API_KEY`. The server API route at `/api/gemini` will only work if the key is present in your environment.

- Do NOT commit `.env.local` or your real API key to the repository. Use environment variables or your platform's secret manager in production.

If you need to run the app in development after adding the key:

```bash
npm run dev
```

## Image processing helper

I added a responsive image processor to generate WebP/JPEG responsive variants and an OG image from a single high-resolution source.

Script: `process-responsive-images.js` (project root)

Example usage (preview):

```powershell
node ./process-responsive-images.js --src "public/images/source/my-post.jpg" --target "public/images/blog/my-post" --widths 400,800,1200,1600 --preview
```

### Open Graph validator (prevent broken previews)

- Run `npm run check:og` to verify each non-draft post has its generated OG image at `/public/images/blog/<slug>/<slug>-og.jpg`.
- Use `npm run build:strict` to run the OG check before building for production. This helps catch missing OG images before deploy.
- If the check fails, generate images first:
   - `npm run images:responsive`
Example usage (apply — writes files):

```powershell
node ./process-responsive-images.js --src "public/images/source/my-post.jpg" --target "public/images/blog/my-post" --widths 400,800,1200,1600
```

You can also run via npm script (uses same CLI args):

```powershell
npm run images:responsive -- --src "public/images/source/my-post.jpg" --target "public/images/blog/my-post" --widths 400,800,1200,1600 --preview
```

Outputs:
- `{target}/{basename}-{width}.webp` and `.jpg` for each width
- `{target}/{basename}-og.jpg` (1200x630 crop)

Notes:
- Script is preview-first; use `--preview` to inspect planned outputs without writing files.
- The project already includes `sharp` as a devDependency.

