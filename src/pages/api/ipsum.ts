import type { APIRoute } from 'astro';
import { generateKotlettIpsumWithOptions } from '../../services/kotlettIpsumGenerator';

export const prerender = false;

export const GET: APIRoute = ({ url }) => {
    const paragraphs = parseInt(url.searchParams.get('paragraphs') || '3');
    const sentences = parseInt(url.searchParams.get('sentences') || '5');
    const format = url.searchParams.get('format') || 'text';

    const text = generateKotlettIpsumWithOptions({ paragraphs, sentences });

    // Return based on format
    if (format === 'json') {
        return new Response(JSON.stringify({
            paragraphs: paragraphs,
            sentences: sentences,
            text: text
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
    } else if (format === 'html') {
        const htmlParagraphs = text.split('\n\n').map(p => `<p>${p}</p>`).join('\n');
        return new Response(htmlParagraphs, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    } else {
        return new Response(text, {
            status: 200,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            }
        });
    }
};
