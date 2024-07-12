import { db, eq, agency_banners } from 'astro:db';

export async function GET({ params }) {
  const id = params.id;
  const product = await db.select().from(agency_banners).where(eq(agency_banners.id, id));

  if (!product) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(
    JSON.stringify(product), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}