import { db, agency_services } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(agency_services).values([
		{id: 1, titulo: "Branding", descripcion: 'Desarrollo de marcas con un proceso integral, desde la concepción de nombre bien fundamentado, el desarrollo de logotipo, isotipo, imagotipo o isologo. Nuestro servicio incluye diseño gráfico para papelería, aplicaciones diversas, la realización de manual de identidad visual y asistencia en el registro de marca.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516498/agency/Social/riqkphz6y5m6qma5nuus.webp'},
		{id: 2, titulo: "desarrollo web y apps", descripcion: 'Creamos experiencias digitales únicas para tu negocio. proyectamos desarrollo web y apps y móviles, catálogos digitales y tiendas en línea de alto rendimiento. Optimizamos tu presencia en internet para que te encuentren tus clientes potenciales.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/vix5sv8ltysqsozszzan.webp'},
		{id: 3, titulo: "Social Media", descripcion: 'Te ofrecemos una gama completa de servicios de marketing digital para impuslsar tu marca y ayudarte a alcanzar tus objetivos comerciales. Somos un equipo de expertos apasionados por ayudar a las empresas a prosperar en el mundo digital. Con la planeación, gestion y creatividad estratégica adecuada en todos los canales.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/lpz3nh4zio1gtwb1nzhl.webp'},
		{id: 4, titulo: "Stands y Produccion", descripcion: 'Nuestro equipo de expertos te ayudara a diseñar y producir un stand que realmente eleve la presencia de tu marca y genere resultados tangibles en tu próxima exposición o evento. Nos encargaremos de todos los aspectos logísticos, de mobiliario y equipamiento.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/x8os6pjup8yameb6pheo.webp'},
		{id: 5, titulo: "ADS de Google Y Social Media", descripcion: 'Manejamos una herramienta poderosa con creatividad y planeación para llegar a tu público objetivo a través de internet. Creamos tu publicidad en redes sociales, que te permitirá promocionar tu negocio, generar tráfico a tu sitio web, y conseguir tus objetivos comerciales.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/ufw8tbhmmvfjtovhgvse.webp'},
		{id: 6, titulo: "foto y video", descripcion: 'Gestión y producción de sesiones de foto y video, product shot, retoque fotográfico, animacion 2d y 3d, guión, producción y postproducción de videos promocionales, comerciales, corporativos, audiovisuales, informativos, audios y musicalización.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/zg36vsk6fvap7yq3aiqn.webp'},
		{id: 7, titulo: "arquitectura e interiorismo", descripcion: 'Diseño y desarrollo de arquitectura e interiorismo, ya sea en proyectos comerciales, habitacionales o corporativos. Conceptualización, elaboración de planos arquitectónicos y de permisos, levantamientos, renders, recorridos virtuales. Producimos señaletica coorporativa de gran calidad.', img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/bs9i50vnxw1qbbvyli7r.webp'},
	])
	// TODO
}