import { db, agency_projects } from 'astro:db';

const allProjects = await db.select().from(agency_projects)
// Asegúrate de que la ruta a tu configuración de la base de datos sea correcta

export async function GET({}) {
    return new Response(
      JSON.stringify(allProjects),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
    }
    );
  }
