import { db, agency_services, agency_banners , agency_projects} from 'astro:db';

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
	]),
	await db.insert(agency_banners).values([
		{id: 4, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123696/agency/agency_banner/mmoxjhww6ng7mr94bdl1.webp'},
		{id: 5, proyect: "Umikumo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123697/agency/agency_banner/fqv2aiy04z9r079ix1tn.webp'},
		{id: 6, proyect: "El Almacen", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123697/agency/agency_banner/bghho5y2zyy5slj89yju.webp'},
		{id: 7, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/rbpojty3hngcd0tmxxq4.webp'},
		{id: 8, proyect: "Almacen", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/egfuoggqw6dggxy9ugqa.webp'},
		{id: 9, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123696/agency/agency_banner/mmoxjhww6ng7mr94bdl1.webp'},
		{id: 10, proyect: "Lake Shore", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123701/agency/agency_banner/jce1xez5wc8grnaldzsg.webp'},
		{id: 11, proyect: "Almacen", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123700/agency/agency_banner/pvjoy5lx1ralaqlnfppe.webp"'},
		{id: 12, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/egfuoggqw6dggxy9ugqa.webp'},
		{id: 13, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123699/agency/agency_banner/tjl7lg619n8ddis3l9vl.webp'},
		{id: 14, proyect: "Umikumo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123699/agency/agency_banner/jfcidkrjwk52o5luijpj.webp'},
		{id: 15, proyect: "Umisama", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123700/agency/agency_banner/ybdf4qjqqcfqrk7biqz7.webp'},
		{id: 16, proyect: "Ladrillo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123701/agency/agency_banner/tlb8bnfw8nw4dj59zuhm.webp'},
		{id: 17, proyect: "Almacen", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123702/agency/agency_banner/skcxqqoznwa7dusyytfw.webp'},
		{id: 18, proyect: "Lago de plata", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123702/agency/agency_banner/kkho3fwclelweagc4qct.webp'},
		{id: 19, proyect: "Umikumo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123703/agency/agency_banner/ywrvo0g7fiiijbbhstim.webp'},
		{id: 20, proyect: "Umisama", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123703/agency/agency_banner/o5mlp0jr2xb7fgludn0a.webp'},
		{id: 21, proyect: "Real Steak", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123704/agency/agency_banner/goflr3igxdnbkcqmxruf.webp'},
		{id: 22, proyect: "Umikumo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123704/agency/agency_banner/hpsjffgkyevhgylb2k0v.webp'},
		{id: 23, proyect: "Umikumo", img_social: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123705/agency/agency_banner/ti7n7qtwiibb3sbhq3xt.webp'},

	]),
	await db.insert(agency_projects).values([
		{
			id: 1,
			titulo: "El Almacen", 
			portada: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/f50fnbjcn5gi7l8iopky.webp', 
			portada_sm: 'https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/urxaf3m7jmhotfsscpoq.webp', 
			descripcion: {
				text: [
					"El Almacén del Bife es uno de los restaurantes que componen Grupo A La mesa. Marca hermana de los restaurantes Umikumo, Umisama y Ladrillo. Su concepto gira en torno al estilo de comida Italo Argentino, con un fuerte enfoque en ofrecer cortes de carne calidad Premium y una experiencia acorde para sus comensales.",
					"En años recientes se ha expandido y actualmente cuenta con sucursales en cinco estados de la República Mexicana: Jalisco, Aguascalientes, San Luis Potosí, Guanajuato y Sinalóa.",
					"Este proyecto lleva varios años en desarrollo y ha requerido de un abanico amplio de servicios para cubrir sus necesidades de comunicación y operación: Branding, Desarrollo Web, Fotografía de producto, Redes sociales, Diseño de aplicaciones de la marca, Marketing digital y sumando."
				]
			},
			images:{
				img:[
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/vqe20gd705as65evhook.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/hcqec9zgfyqtqgankzn9.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/wjrgihcq3ccxd9ptuhcl.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/od2huhh0d7lxegrqsn8x.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/pobot7wvexfcc7d5clq8.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/yzvrndfnlmtbqec0fs4g.webp",
							"fotos y video"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/xu1awnaiksc0faolf0ok.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/hqvgmw8hfgtiahbpiaos.webp",
							"stands y produccion"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/yaoljlkdpe3b4j0y2ahc.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/irp4uctxs3j4nyazctdx.webp",
							"arquitectura e interiorismo"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/mbor2lattgptjcvnp9su.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/jxipfblypnomhngew0ap.webp",
							"arquitectura e interiorismo"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/dmqyqar34viqnowifnqz.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/swjzwqnhwpt2zcqhpsvx.webp",
							"stands y produccion"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/l775ctkihby2ryta2phc.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/orvluv1yxyk2rojbhdwo.webp",
							"web"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/mo2wdtefkcnsq3gl164f.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/lauq9dzcveaxeg1nj6jf.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/yqoousnd1exlxzjgikuu.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/upssicvxbut3tahue6yv.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/ki2cdlrzkywgpakms02k.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/z5kbr6gujcaqcqtxrezw.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/jn5kcvbxuevbjmsviehh.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/so1pmzhaz7hzuse0drum.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/koubqfljxek1lou9re8e.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/ncghwnm50onxektfbll2.webp",
							"branding"
						],
						[
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533255/agency/almacen/ty06u6veebx38qgarihn.webp",
							"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533255/agency/almacen/hg16ypbpc4j9xqps3nlt.webp",
							"branding"
						]
				]
			},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/d8nsnlb6rehscfcfzpdk.webp",
		tags: "Branding / Web / Social Media"
	},


	{
		id: 2,
		titulo: "Fresam", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962061/agency/fresam/wxmvcv4artyhpavileot.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962062/agency/fresam/urfdf0ujcu15mjummasr.webp", 
		descripcion: {
			text: [
				"es la marca comercial de la empresa Agrofresam. Que se dedica al cultivo y exportación de una amplia variedad de moras y mango, en presentaciones frescas o congeladas. Con instalaciones en Jacona, Michoacán, son unos de los más grandes proveedores de berries de exportación para Estados Unidos. Su filosofía gira en torno a mantener siempre la vanguardia en los procesos de cultivo, recolección y procesado, para ofrecer productos con altos estándares de calidad.",
				"Hemos trabajado con ellos a lo largo de 10 años y para cubrir sus necesiades de comunicación hacemos uso de todos nuestros servicios, que van desde el Branding, fotografía de producto, diseño de mascotas, producción de stands, producción de impresos, diseño de empaque, manejo y estrategia de redes sociales, diseño web y desarrollo de aplicaciones, entre muchos otros."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962029/agency/fresam/esgchrn3u4w3edvfhukr.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962032/agency/fresam/fyrlzyjnwyptryy1n5yc.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962033/agency/fresam/fdg2vpkjn69ojocv6der.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962034/agency/fresam/wd9ppacdxkrpvzc2nd1r.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962036/agency/fresam/pn39lhfvsq9xty3jpdhp.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962037/agency/fresam/i9fzets8pbuj0kf3hboe.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962038/agency/fresam/r2zgthalpjxwzrewehnb.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962039/agency/fresam/jsofqxmcc4ilnlgxrtto.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962040/agency/fresam/sfgu2nk20nrdlh2lt45r.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962041/agency/fresam/le1yy5qh9clag1zhqm8k.webp",
					"arquitectura e interiorismo"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962042/agency/fresam/xzykq94oxukeasnlhzvs.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962044/agency/fresam/fm0rtlaqdkbjmb8udwto.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962045/agency/fresam/cfvnrfjpki960d56lhya.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962046/agency/fresam/z23lsh8hkduzvsuvlsz7.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962047/agency/fresam/zvyp6nmim2ywbe0jfd3m.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962048/agency/fresam/kymivdzskcgwz4krfvzp.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962049/agency/fresam/gqe8gvp7n2ahqp7e79ap.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962051/agency/fresam/lbwfqc9twnojfpa4ygiw.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962052/agency/fresam/k5wwezkvev8qmd5psryi.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962053/agency/fresam/fsdjprqo64vpgngke6sh.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962054/agency/fresam/kthqsgilkbuqxg0b4qi8.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962055/agency/fresam/c92g2j2cryqnbvv9esba.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962056/agency/fresam/bado1ycjdpxatwsi6qd4.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962057/agency/fresam/od6o2rpoqdcifzp05oxp.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962059/agency/fresam/desss7afwifvw4cdfjqr.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962060/agency/fresam/q9hbddx0azyxvqug74v5.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/t5k8ledeogmhppgoqulb.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962031/agency/fresam/jn24xb1cwbzfh4nas8mr.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962930/agency/fresam/o5du9qb1el2ot0nxqtaa.gif",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962930/agency/fresam/o5du9qb1el2ot0nxqtaa.gif",
					"social media"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/d8nsnlb6rehscfcfzpdk.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 3,
		titulo: "Ladrillo Empanadas", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889521/agency/ladrillo/dkvlovu6bvbrurbj0y9x.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889522/agency/ladrillo/vdskenaqenho9rl3mytd.webp", 
		descripcion: {
			text: [
				"es una franquicia de venta de empanadas de estilo Italo Argentinas. Forma parte de Grupo A La Mesa junto con sus marcas hermanas: Almacén del Bife, Umikumo y Umisama.",
				"Su concepto gira en torno a ofrecer un producto de muy alta calidad, con una variedad de sabores que puede apelar a todos los gustos y antojos. Con recetas de empanadas tanto dulces como saladas. Busca ser flexible ubicando sus locales en kioskos hechos a la medida, que proyectan una personalidad moderna con toques tradicionales.",
				"Este proyecto tomó forma gracias a los servicios de Branding, Diseño de Stands y locales, Diseño de empaque, Estrategia de Redes Sociales y Fotografía de producto, que ofrecemos dentro de nuestro concepto de agencia."	
			]
		},
		images:{
			img:[
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889501/agency/ladrillo/fdfjqc8hgzo6axbxcghq.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889501/agency/ladrillo/oovwdvhdu99ezit7fy9e.webp",
						"web"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889502/agency/ladrillo/wrpzrgbvl4grgenw9pvv.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889503/agency/ladrillo/yw9x6zleblqtqucku6pu.webp",
						"web"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889505/agency/ladrillo/mwy3bezrtsfdf4jggqev.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889505/agency/ladrillo/oqdb01c8t1oiv3q0mhbp.webp",
						"branding"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889507/agency/ladrillo/bowbz5m8sa3oufbqky8q.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889508/agency/ladrillo/yiiryles5heqqjwd1uta.webp",
						"branding"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889509/agency/ladrillo/bp25cjza55ydnnpyfqxo.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889510/agency/ladrillo/jsfdfb7sgkkbhyrl9pal.webp",
						"branding"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889511/agency/ladrillo/fwwnlngcvx6suef0kfbw.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889512/agency/ladrillo/pafufg9lbyfrex9ohmtr.webp",
						"social media"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889513/agency/ladrillo/w4hkj2gxwjnkz39eawed.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889514/agency/ladrillo/glonuko3vqsxd6fal6ht.webp",
						"social media"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889515/agency/ladrillo/ox5xjf8nqqnrqwaebou7.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889520/agency/ladrillo/zi8kablqpdrf6wccoyoe.webp",
						"social media"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889516/agency/ladrillo/ymabqai3tqqdl7pd061t.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889517/agency/ladrillo/yioejvygm27b7qxynllx.webp",
						"social media"
					],
					[
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889518/agency/ladrillo/k4tesrcrurzjgmacia5o.webp",
						"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889519/agency/ladrillo/en1z6xyitmnuce18ze7v.webp",
						"social media"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/xu6dtch7v0eq5vuzzalv.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 4,
		titulo: "Lago de Plata", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948763/agency/lagoplata/fn1nybel4sf0xfnlmbx6.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948765/agency/lagoplata/tqz14rumcansenbc7n8v.webp", 
		descripcion: {
			text: [
				"es un exclusivo desarrollo inmobiliario, planeado para ser un proyecto sustentable, que cuenta con las amenidades de desarrollos similares de este tipo. Ubicado en las proximidades de Ajijic y el Lago de Chapala, entre sus principales atributos podemos mencionar: La excelente plusvalía, la cercanía con puntos turísticos de interés, zonas comerciales y áreas naturales.",
				"Para este proyecto trabajamos el Branding del desarrollo, además de materiales publicitarios, brochures y desarrollo de sitio web que reflejara la calidad y valor que los clientes estarían adquiriendo al invertir en una de estas propiedades."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/lagoplata/tksbrnbd7p1dtquczr8v.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/lagoplata/jbrnkp8nv1gb20wn5yxl.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/vluevgczxqijddvvjbxz.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/n2vwxzwdqwjjt4jpmpgl.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/hgs0iizjk1zsijgms1zw.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/lagoplata/vgybvhond4kegbs4418c.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/lagoplata/kh8jd2uos29tvrq3exts.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/lagoplata/kazj1ppbqduy4xvcveho.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/lagoplata/tnctqkjjjdko6wn0vxgs.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/lagoplata/bxaq47ohznkwr79o0i9e.webp",
					"branding"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/itqngn8enbouj7cxqsjt.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 5,
		titulo: "Samfrut", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955694/agency/samfrut/rq805laawx0iikhvhqan.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955696/agency/samfrut/mvktk6tlwiqpfsy7nrgb.webp", 
		descripcion: {
			text: [
				"es una empresa 100% mexicana que se ubica en la ciudad de Jacona, Michoacán, México en el Valle de Zamora, prestigioso por tener las mejores condiciones para la producción de berries.",
				"Está fundamentada en trabajar bajo los estrictos controles de seguridad alimentaria, buscando siempre la innovación de sus procesos y la tecnología de vanguardia de la industria alimenticia.",
				"Hemos trabajado con ellos a lo largo de 8 años y para cubrir sus necesiades de comunicación hacemos uso de todos nuestros servicios, que van desde el Branding, fotografía de producto, diseño de mascotas, producción de stands, producción de impresos, diseño de empaque, manejo y estrategia de redes sociales, diseño web y desarrollo de aplicaciones, entre muchos otros."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955679/agency/samfrut/cdptvvuq6drq4edxy1gn.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955679/agency/samfrut/iriwe90eugzdhshbn6cu.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955689/agency/samfrut/f1voxm7fjmswvpyv7haj.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955689/agency/samfrut/m3gmngqolp0lf0absjul.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955680/agency/samfrut/aic5fgbwcgrylxbvulfb.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955681/agency/samfrut/c48htitnufzb66iksgwi.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955682/agency/samfrut/crunnzkpiswl5ndntv3p.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955683/agency/samfrut/acsqzvov6oajscxzaaeh.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955684/agency/samfrut/mvndxn7szr9dfgvezlna.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955685/agency/samfrut/y3bq5fpkukl6ydz2zwrd.webp",
					"arquitectura e interiorismo"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955687/agency/samfrut/giymu3qswmh0k0talswn.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955687/agency/samfrut/e11aacznk8nqplgoonyw.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955693/agency/samfrut/qjjxljlwjqbp8pmtnbwd.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955691/agency/samfrut/vxzu8aleflbm5v7gz2xx.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955692/agency/samfrut/arr1vjy9kx5nlsqaoas5.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955695/agency/samfrut/fkjv4dyimg11jsiwdmm8.webp",
					"stands y produccion"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/lukffsbmidhfaeks1nic.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 6,
		titulo: "SoA Mobiliario", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891711/agency/soa/ahtnqu3rz7riodlxctiz.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891712/agency/soa/x7bzuoh5j3smq2rqpcja.webp", 
		descripcion: {
			text: [
				"es una marca dedicada al diseño de proyectos de interiorismo, reforzados por la venta de mobiliario, cuyo catálogo es curado cuidadosamente para ofrecer productos llenos de personalidad para todos los presupuestos.",
				"Estamos orgullosos de estar trabajando con ellos y poder observar su crecimiento y progreso a lo largo de los años.",
				"Para ellos hemos desarrollado diferentes soluciones de Branding, Desarrollos web, Estrategia de marca y redes sociales, Producción de contenido y video."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891709/agency/soa/nvjicxswjqymh1js5twq.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891710/agency/soa/cjaasgp2ynoo1gk7x6d2.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891859/agency/soa/v850vdjq8pgqnobzo6qk.gif",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891859/agency/soa/v850vdjq8pgqnobzo6qk.gif",
					"social media"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/p4sgwofavhy948mf26bi.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 7,
		titulo: "Taster Meats", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953010/agency/tastermeats/zsciihxg3ekmgisgprmh.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953011/agency/tastermeats/yzufcxl8efldotmp5oea.webp", 
		descripcion: {
			text: [
				"es una empresa procesadora y productora de productos cárnicos. Enfocados en la carne para asar, tanto en presentaciones de hamburguesas, como presentaciones de piezas sazonadas listas para asar.",
				"Hemos tenido el honor de trabajar con ellos en el diseño y producción de sus líneas principales de productos de hamburguesa. Destacando entre nuestras actividades la fotografía de producto, que se utilizaría tanto en empaques como en comunicación gráfica y redes sociales, como en el diseño de sus empaques. Mismos que serían adaptados a varias presentaciónes de tamaño.",
				"Dentro de sus planes futuros estan el producir una línea de productos a base de carne de pollo, misma en la que hemos participado en su planeación y diseño."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952961/agency/tastermeats/qh6s8s14cvgr8guxaohf.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952962/agency/tastermeats/gtfl9clu34ttnjex84r9.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/sjdmqcjian9n4zlplbse.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/vub1h0lggrjhcswrywht.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952964/agency/tastermeats/cjcnnidbqwwrmncgeetx.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952965/agency/tastermeats/bnlrjjio0k4mbkypbmus.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952966/agency/tastermeats/jouc1qlmkddyllfktspv.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952967/agency/tastermeats/wwutfjs35bb24rxosdto.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/dnckleqp0gnqw1j94c7o.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/zcpwv3ch7jnctqacuwoy.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952969/agency/tastermeats/p2mrkhr8v4ko82coxg53.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952970/agency/tastermeats/iwzmzawtyw5opsxiwiew.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/m3sw6jhig4q1uzo8k1jr.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/slvieupbjufybc3bnnid.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952999/agency/tastermeats/csgfq6kjavfiydnrejgi.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953000/agency/tastermeats/nqrakgzciokllxvzlzru.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953001/agency/tastermeats/ofbwkqxaz5cjwnaki6ar.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953002/agency/tastermeats/idoer2hi6uavog2fre2f.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953003/agency/tastermeats/v35eghpi1grzcb4srsu7.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953004/agency/tastermeats/weknsttnlcf4av6wisca.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/cphytwwum65fsbe2w7so.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/gb8tx4u9lcsnwo6vksas.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/l0v5ebixvjcvc2yuwria.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/biaw8lqak78jmztpsu2x.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953008/agency/tastermeats/zy6m9x88gpcqngavccek.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953009/agency/tastermeats/mygm6nfhcnlcum4scnjd.webp",
					"branding"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/fwf714fh2itysflondux.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 8,
		titulo: "Umisama Sushi Bar", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/wsush0jqd9pjiymtubhz.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977110/agency/umisama/hrtjlxpyarrvlfm2awc6.webp", 
		descripcion: {
			text: [
				"es un restaurante que forma parte de Grupo A La Mesa, junto con sus marcas hermanas Umikumo, Almancén del Bife y Ladrillo.",
				"Ofrece una experiencia jóven y llena de energía, además de una amplia variedad de estilos de sushis regionalizados para el mercado Mexicano. Actualmente cuenta con una sucursal en San Luis Potosí, con miras de expandirse a otros estados de la República.",
				"Para este proyecto desarrollamos la propuesta de Branding acompañada de nuestra Dirección Creativa para solventar los temas de fotografía de producto, estrategia de redes sociales, producción de video y comunicación general de la marca."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/emtep9omiputqfzezyh3.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/orrpxzfu7osciiq0dd83.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/zjbur8smr0gdrywcmlgn.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/uxmxvdirrc7foagcuded.webp",
					"web"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/r06oyoysdbksuljqgyso.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/qffxpuduoqfmzw6s7mid.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/cuwucm8lpg7pcozebf4g.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/nchhredhfvizzj6yhx9s.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/mc51fhgn57zilbbxkuvt.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/cvi1n9ydrnhauawmkgd6.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/pxduam8zqy49hn6cfy6o.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/yxrk1fh2rs83kvvyb8c4.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/bs9s5n90ipigrjkghmuz.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/otqlgfcsj1x7urwcqbw3.webp",
					"foto y video"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/fwf714fh2itysflondux.webp",
		tags: "Branding / Web / Social Media"
	},

	{
		id: 9,
		titulo: "Umikumo", 
		portada: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886931/agency/umikumo/bjjk8udafushzma8djpd.webp", 
		portada_sm: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886904/agency/umikumo/f5usx9i8ucsjgyfj72xy.webp", 
		descripcion: {
			text: [
				"Umikomo es un restaurante de estilo tradicional japonés. Forma parte de Grupo A La Mesa junto con sus marcas hermanas Umisama, Almacén del Bife y Ladrillo.",
				"Su enfoque principal es ofrecer una alta experiencia culinaria lo más fiel posible a las barras Omakase tradicionales, que son una de las principales referencias culturales japonesas reconocidas en todo el mundo.",
				"Actualmente cuenta con dos locaciones, una en León, Guanajuato y la otra en San Luis Potosí. Para este proyecto se han requerido una gama amplia de nuestros servicios, que inlcuyen Branding, Edición fotográfica, Estrategia y planeación de redes sociales, producción de materiales audiovisuales y Dirección creativa entre muchas otras."
			]
		},
		images:{
			img:[
				[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952961/agency/tastermeats/qh6s8s14cvgr8guxaohf.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952962/agency/tastermeats/gtfl9clu34ttnjex84r9.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/sjdmqcjian9n4zlplbse.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/vub1h0lggrjhcswrywht.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952964/agency/tastermeats/cjcnnidbqwwrmncgeetx.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952965/agency/tastermeats/bnlrjjio0k4mbkypbmus.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952966/agency/tastermeats/jouc1qlmkddyllfktspv.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952967/agency/tastermeats/wwutfjs35bb24rxosdto.webp",
					"branding"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/dnckleqp0gnqw1j94c7o.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/zcpwv3ch7jnctqacuwoy.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952969/agency/tastermeats/p2mrkhr8v4ko82coxg53.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952970/agency/tastermeats/iwzmzawtyw5opsxiwiew.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/m3sw6jhig4q1uzo8k1jr.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/slvieupbjufybc3bnnid.webp",
					"social media"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952999/agency/tastermeats/csgfq6kjavfiydnrejgi.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953000/agency/tastermeats/nqrakgzciokllxvzlzru.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953001/agency/tastermeats/ofbwkqxaz5cjwnaki6ar.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953002/agency/tastermeats/idoer2hi6uavog2fre2f.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953003/agency/tastermeats/v35eghpi1grzcb4srsu7.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953004/agency/tastermeats/weknsttnlcf4av6wisca.webp",
					"foto y video"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/cphytwwum65fsbe2w7so.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/gb8tx4u9lcsnwo6vksas.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/l0v5ebixvjcvc2yuwria.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/biaw8lqak78jmztpsu2x.webp",
					"stands y produccion"
					],
					[
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953008/agency/tastermeats/zy6m9x88gpcqngavccek.webp",
					"https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953009/agency/tastermeats/mygm6nfhcnlcum4scnjd.webp",
					"branding"
					]
			]
		},
		miniatura: "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/fwf714fh2itysflondux.webp",
		tags: "Branding / Web / Social Media"
	},
	
	])
}
