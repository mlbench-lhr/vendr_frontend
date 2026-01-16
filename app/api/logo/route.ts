import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const logoPath = path.join(process.cwd(), 'app', 'logo.svg');
    const svg = await fs.readFile(logoPath, 'utf8');
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=3600, immutable'
      }
    });
  } catch (err) {
    return new Response('Not Found', { status: 404 });
  }
}

