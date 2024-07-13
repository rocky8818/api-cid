import { db, eq, agency_projects } from 'astro:db';

export async function GET({ params }) {
  const titulo = params.titulo;
  const product = await db.select().from(agency_projects).where(eq(agency_projects.titulo, titulo));

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