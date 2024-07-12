import { db, agency_services } from 'astro:db';

const allServices = await db.select().from(agency_services)
// Asegúrate de que la ruta a tu configuración de la base de datos sea correcta

export async function GET({}) {
    return new Response(
      JSON.stringify(allServices),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
    }
    );
  }
