import { db, agency_banners } from 'astro:db';

const allBanners = await db.select().from(agency_banners)
// Asegúrate de que la ruta a tu configuración de la base de datos sea correcta

export async function GET({}) {
    return new Response(
      JSON.stringify(allBanners),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
    }
    );
  }
