import { db, agency_services, agency_banners, agency_projects } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(agency_services).values([
    {
      id: 1,
      titulo: "Branding",
      descripcion:
        "Desarrollo integral de marcas en Guadalajara: Nombre, logotipo, imagotipo y más. CID ofrece servicios de branding guadalajara para fortalecer tu identidad visual.",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516498/agency/Social/riqkphz6y5m6qma5nuus.webp",
    },
    {
      id: 2,
      titulo: "desarrollo web y apps",
      descripcion:
        "Creamos experiencias digitales únicas para tu negocio. Hacemos del desarrollo de apps guadalajara una experiencia exitosa, sitios web y apps, catálogos digitales y tiendas en línea de alto rendimiento. Optimizamos tu presencia en internet para que te encuentren tus clientes potenciales. Experiencias digitales únicas con desarrollo de apps en Guadalajara.",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/vix5sv8ltysqsozszzan.webp",
    },
    {
      id: 3,
      titulo: "Social Media",
      descripcion:
        "Te ofrecemos una gama completa de servicios de marketing digital para impuslsar tu marca y ayudarte a alcanzar tus objetivos comerciales. Somos un equipo de expertos apasionados por ayudar a las empresas a prosperar en el mundo digital. Con la planeación, gestion y creatividad estratégica adecuada en todos los canales.",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/lpz3nh4zio1gtwb1nzhl.webp",
    },
    {
      id: 4,
      titulo: "Stands y Produccion",
      descripcion:
        "Nuestro equipo de expertos te ayudara a diseñar y producir un stand que realmente eleve la presencia de tu marca y genere resultados tangibles en tu próxima exposición o evento. Nos encargaremos de todos los aspectos logísticos, de mobiliario y equipamiento.",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/x8os6pjup8yameb6pheo.webp",
    },
    {
      id: 5,
      titulo: "ADS de Google Y Social Media",
      descripcion:
        "Manejamos una herramienta poderosa con creatividad y planeación para llegar a tu público objetivo a través de internet. Creamos tu publicidad en redes sociales, que te permitirá promocionar tu negocio, generar tráfico a tu sitio web, y conseguir tus objetivos comerciales. Los servicios de marketing digital que necesitas",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/ufw8tbhmmvfjtovhgvse.webp",
    },
    {
      id: 6,
      titulo: "foto y video",
      descripcion:
        "Gestión y producción de sesiones de foto y video, product shot, retoque fotográfico, animacion 2d y 3d, guión, producción y postproducción de videos promocionales, comerciales, corporativos, audiovisuales, informativos, audios y musicalización.",
      img_social:
        "https://res.cloudinary.com/dp9ldjfem/image/upload/v1714516496/agency/Social/zg36vsk6fvap7yq3aiqn.webp",
    }
  ]),
    await db.insert(agency_banners).values([
      {
        id: 4,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123696/agency/agency_banner/mmoxjhww6ng7mr94bdl1.webp",
        width: "367",
      },
      {
        id: 9,
        proyect: "Umikumo",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123697/agency/agency_banner/fqv2aiy04z9r079ix1tn.webp",
        width: "223",
      },
      {
        id: 1,
        proyect: "El Almacen",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123697/agency/agency_banner/bghho5y2zyy5slj89yju.webp",
        width: "486",
      },
      {
        id: 3,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/rbpojty3hngcd0tmxxq4.webp",
        width: "367",
      },
      {
        id: 1,
        proyect: "El Almacen",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/egfuoggqw6dggxy9ugqa.webp",
        width: "223",
      },
      {
        id: 3,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123696/agency/agency_banner/mmoxjhww6ng7mr94bdl1.webp",
        width: "367",
      },
      {
        id: 4,
        proyect: "LakeShore",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123701/agency/agency_banner/jce1xez5wc8grnaldzsg.webp",
        width: "223",
      },
      {
        id: 1,
        proyect: "El Almacen",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123700/agency/agency_banner/pvjoy5lx1ralaqlnfppe.webp",
        width: "486",
      },
      {
        id: 3,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123698/agency/agency_banner/egfuoggqw6dggxy9ugqa.webp",
        width: "223",
      },
      {
        id: 3,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123699/agency/agency_banner/tjl7lg619n8ddis3l9vl.webp",
        width: "486",
      },
      {
        id: 9,
        proyect: "Umikumo",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123699/agency/agency_banner/jfcidkrjwk52o5luijpj.webp",
        width: "366",
      },
      {
        id: 8,
        proyect: "Umisama Sushi Bar",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123700/agency/agency_banner/ybdf4qjqqcfqrk7biqz7.webp",
        width: "223",
      },
      {
        id: 3,
        proyect: "Ladrillo Empanadas",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123701/agency/agency_banner/tlb8bnfw8nw4dj59zuhm.webp",
        width: "486",
      },
      {
        id: 1,
        proyect: "El Almacen",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123702/agency/agency_banner/skcxqqoznwa7dusyytfw.webp",
        width: "367",
      },
      {
        id: 4,
        proyect: "Lago de Plata",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123702/agency/agency_banner/kkho3fwclelweagc4qct.webp",
        width: "223",
      },
      {
        id: 9,
        proyect: "Umikumo",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123703/agency/agency_banner/ywrvo0g7fiiijbbhstim.webp",
        width: "486",
      },
      {
        id: 8,
        proyect: "Umisama Sushi Bar",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123703/agency/agency_banner/o5mlp0jr2xb7fgludn0a.webp",
        width: "367",
      },
      {
        id: 4,
        proyect: "Lago de Plata",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123704/agency/agency_banner/goflr3igxdnbkcqmxruf.webp",
        width: "223",
      },
      {
        id: 9,
        proyect: "Umikumo",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123704/agency/agency_banner/hpsjffgkyevhgylb2k0v.webp",
        width: "486",
      },
      {
        id: 9,
        proyect: "Umikumo",
        img_social:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1711123705/agency/agency_banner/ti7n7qtwiibb3sbhq3xt.webp",
        width: "367",
      },
    ]),
    await db.insert(agency_projects).values([
      {
        id: 1,
        titulo: "El Almacen",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/f50fnbjcn5gi7l8iopky.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/urxaf3m7jmhotfsscpoq.webp",
        descripcion: {
          text: [
            "El Almacén del Bife es uno de los restaurantes que componen Grupo A La mesa. Marca hermana de los restaurantes Umikumo, Umisama y Ladrillo. Su concepto gira en torno al estilo de comida Italo Argentino, con un fuerte enfoque en ofrecer cortes de carne calidad Premium y una experiencia acorde para sus comensales.",
            "En años recientes se ha expandido y actualmente cuenta con sucursales en cinco estados de la República Mexicana: Jalisco, Aguascalientes, San Luis Potosí, Guanajuato y Sinalóa.",
            "Este proyecto lleva varios años en desarrollo y ha requerido de un abanico amplio de servicios para cubrir sus necesidades de comunicación y operación: Branding, Desarrollo Web, Fotografía de producto, Redes sociales, Diseño de aplicaciones de la marca, Marketing digital y sumando.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/vqe20gd705as65evhook.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/hcqec9zgfyqtqgankzn9.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533250/agency/almacen/wjrgihcq3ccxd9ptuhcl.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/od2huhh0d7lxegrqsn8x.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/pobot7wvexfcc7d5clq8.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/yzvrndfnlmtbqec0fs4g.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/xu1awnaiksc0faolf0ok.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/hqvgmw8hfgtiahbpiaos.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/yaoljlkdpe3b4j0y2ahc.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533251/agency/almacen/irp4uctxs3j4nyazctdx.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/mbor2lattgptjcvnp9su.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/jxipfblypnomhngew0ap.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/dmqyqar34viqnowifnqz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/swjzwqnhwpt2zcqhpsvx.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/l775ctkihby2ryta2phc.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533252/agency/almacen/orvluv1yxyk2rojbhdwo.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/mo2wdtefkcnsq3gl164f.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/lauq9dzcveaxeg1nj6jf.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/yqoousnd1exlxzjgikuu.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/upssicvxbut3tahue6yv.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/ki2cdlrzkywgpakms02k.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533253/agency/almacen/z5kbr6gujcaqcqtxrezw.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/jn5kcvbxuevbjmsviehh.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/so1pmzhaz7hzuse0drum.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/koubqfljxek1lou9re8e.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533254/agency/almacen/ncghwnm50onxektfbll2.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533255/agency/almacen/ty06u6veebx38qgarihn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710533255/agency/almacen/hg16ypbpc4j9xqps3nlt.webp",
              ["social media"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/d8nsnlb6rehscfcfzpdk.webp",
        tags: "Branding / Web / Social Media / Foto y Video",
        to_projects: "Ladrillo Empanadas, Umikumo, Umisama Sushi Bar",
      },

      {
        id: 2,
        titulo: "Fresam",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962061/agency/fresam/wxmvcv4artyhpavileot.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962062/agency/fresam/urfdf0ujcu15mjummasr.webp",
        descripcion: {
          text: [
            "es la marca comercial de la empresa Agrofresam. Que se dedica al cultivo y exportación de una amplia variedad de moras y mango, en presentaciones frescas o congeladas. Con instalaciones en Jacona, Michoacán, son unos de los más grandes proveedores de berries de exportación para Estados Unidos. Su filosofía gira en torno a mantener siempre la vanguardia en los procesos de cultivo, recolección y procesado, para ofrecer productos con altos estándares de calidad.",
            "Hemos trabajado con ellos a lo largo de 10 años y para cubrir sus necesiades de comunicación hacemos uso de todos nuestros servicios, que van desde el Branding, fotografía de producto, diseño de mascotas, producción de stands, producción de impresos, diseño de empaque, manejo y estrategia de redes sociales, diseño web y desarrollo de aplicaciones, entre muchos otros.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962029/agency/fresam/esgchrn3u4w3edvfhukr.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962032/agency/fresam/fyrlzyjnwyptryy1n5yc.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962033/agency/fresam/fdg2vpkjn69ojocv6der.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962034/agency/fresam/wd9ppacdxkrpvzc2nd1r.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962036/agency/fresam/pn39lhfvsq9xty3jpdhp.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962037/agency/fresam/i9fzets8pbuj0kf3hboe.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962038/agency/fresam/r2zgthalpjxwzrewehnb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962039/agency/fresam/jsofqxmcc4ilnlgxrtto.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962040/agency/fresam/sfgu2nk20nrdlh2lt45r.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962041/agency/fresam/le1yy5qh9clag1zhqm8k.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962042/agency/fresam/xzykq94oxukeasnlhzvs.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962044/agency/fresam/fm0rtlaqdkbjmb8udwto.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962045/agency/fresam/cfvnrfjpki960d56lhya.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962046/agency/fresam/z23lsh8hkduzvsuvlsz7.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962047/agency/fresam/zvyp6nmim2ywbe0jfd3m.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962048/agency/fresam/kymivdzskcgwz4krfvzp.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962049/agency/fresam/gqe8gvp7n2ahqp7e79ap.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962051/agency/fresam/lbwfqc9twnojfpa4ygiw.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962052/agency/fresam/k5wwezkvev8qmd5psryi.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962053/agency/fresam/fsdjprqo64vpgngke6sh.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962054/agency/fresam/kthqsgilkbuqxg0b4qi8.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962055/agency/fresam/c92g2j2cryqnbvv9esba.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962056/agency/fresam/bado1ycjdpxatwsi6qd4.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962057/agency/fresam/od6o2rpoqdcifzp05oxp.webp",
              ["stands y produccion"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962059/agency/fresam/desss7afwifvw4cdfjqr.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962060/agency/fresam/q9hbddx0azyxvqug74v5.webp",
              ["stands y produccion"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/t5k8ledeogmhppgoqulb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962031/agency/fresam/jn24xb1cwbzfh4nas8mr.webp",
              ["stands y produccion"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962930/agency/fresam/o5du9qb1el2ot0nxqtaa.gif",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962930/agency/fresam/o5du9qb1el2ot0nxqtaa.gif",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003261_z8wuf2.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam1_wwwwao.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003262_forf2c.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2_eulap9.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003263_byjcqj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2-1_m4ctuq.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003264_hjz9ux.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2-4_fepjhz.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003265_m26hpk.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2-2_efs7kq.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003267_rsi1wk.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2-5_rboh2u.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003268_z2zdcf.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Caso_de_estudio_fresam2-6_fq7ulv.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Group_1000003269_widcsl.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/Frame_1261153742_vevhti.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand_qhroko.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand-1_uhb88p.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand-2_rtkhgo.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand-3_mk9zuf.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand-4_kqlvsz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710962030/agency/fresam/extension_Fresam_brand-5_ffysxm.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/epgskcegbrcnehpco98c.webp",
        tags: "Branding / Web / Stands y produccion",
        to_projects: "Samfrut, Taster Meats, MiBici",
      },

      {
        id: 3,
        titulo: "Ladrillo Empanadas",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889521/agency/ladrillo/dkvlovu6bvbrurbj0y9x.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889522/agency/ladrillo/vdskenaqenho9rl3mytd.webp",
        descripcion: {
          text: [
            "es una franquicia de venta de empanadas de estilo Italo Argentinas. Forma parte de Grupo A La Mesa junto con sus marcas hermanas: Almacén del Bife, Umikumo y Umisama.",
            "Su concepto gira en torno a ofrecer un producto de muy alta calidad, con una variedad de sabores que puede apelar a todos los gustos y antojos. Con recetas de empanadas tanto dulces como saladas. Busca ser flexible ubicando sus locales en kioskos hechos a la medida, que proyectan una personalidad moderna con toques tradicionales.",
            "Este proyecto tomó forma gracias a los servicios de Branding, Diseño de Stands y locales, Diseño de empaque, Estrategia de Redes Sociales y Fotografía de producto, que ofrecemos dentro de nuestro concepto de agencia.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889501/agency/ladrillo/fdfjqc8hgzo6axbxcghq.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889501/agency/ladrillo/oovwdvhdu99ezit7fy9e.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889502/agency/ladrillo/wrpzrgbvl4grgenw9pvv.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889503/agency/ladrillo/yw9x6zleblqtqucku6pu.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889505/agency/ladrillo/mwy3bezrtsfdf4jggqev.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889505/agency/ladrillo/oqdb01c8t1oiv3q0mhbp.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889507/agency/ladrillo/bowbz5m8sa3oufbqky8q.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889508/agency/ladrillo/yiiryles5heqqjwd1uta.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889509/agency/ladrillo/bp25cjza55ydnnpyfqxo.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889510/agency/ladrillo/jsfdfb7sgkkbhyrl9pal.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889511/agency/ladrillo/fwwnlngcvx6suef0kfbw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889512/agency/ladrillo/pafufg9lbyfrex9ohmtr.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889513/agency/ladrillo/w4hkj2gxwjnkz39eawed.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889514/agency/ladrillo/glonuko3vqsxd6fal6ht.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889515/agency/ladrillo/ox5xjf8nqqnrqwaebou7.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889520/agency/ladrillo/zi8kablqpdrf6wccoyoe.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889516/agency/ladrillo/ymabqai3tqqdl7pd061t.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889517/agency/ladrillo/yioejvygm27b7qxynllx.webp",
              ["stands y produccion"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889518/agency/ladrillo/k4tesrcrurzjgmacia5o.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710889519/agency/ladrillo/en1z6xyitmnuce18ze7v.webp",
              ["stands y produccion"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/xu6dtch7v0eq5vuzzalv.webp",
        tags: "Branding / Foto y video / Stands y produccion",
        to_projects: "El Almacen, Umikumo, Umisama Sushi Bar",
      },

      {
        id: 4,
        titulo: "Lago de Plata",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948763/agency/lagoplata/fn1nybel4sf0xfnlmbx6.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948765/agency/lagoplata/tqz14rumcansenbc7n8v.webp",
        descripcion: {
          text: [
            "es un exclusivo desarrollo inmobiliario, planeado para ser un proyecto sustentable, que cuenta con las amenidades de desarrollos similares de este tipo. Ubicado en las proximidades de Ajijic y el Lago de Chapala, entre sus principales atributos podemos mencionar: La excelente plusvalía, la cercanía con puntos turísticos de interés, zonas comerciales y áreas naturales.",
            "Para este proyecto trabajamos el Branding del desarrollo, además de materiales publicitarios, brochures y desarrollo de sitio web que reflejara la calidad y valor que los clientes estarían adquiriendo al invertir en una de estas propiedades.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/lagoplata/tksbrnbd7p1dtquczr8v.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/lagoplata/jbrnkp8nv1gb20wn5yxl.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/vluevgczxqijddvvjbxz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/n2vwxzwdqwjjt4jpmpgl.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/lagoplata/hgs0iizjk1zsijgms1zw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/lagoplata/vgybvhond4kegbs4418c.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/lagoplata/kh8jd2uos29tvrq3exts.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/lagoplata/kazj1ppbqduy4xvcveho.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/lagoplata/tnctqkjjjdko6wn0vxgs.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/lagoplata/bxaq47ohznkwr79o0i9e.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/itqngn8enbouj7cxqsjt.webp",
        tags: "Web",
        to_projects: "Fresam, SoA Mobiliario, Taster Meats",
      },

      {
        id: 5,
        titulo: "Samfrut",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955694/agency/samfrut/rq805laawx0iikhvhqan.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955696/agency/samfrut/mvktk6tlwiqpfsy7nrgb.webp",
        descripcion: {
          text: [
            "es una empresa 100% mexicana que se ubica en la ciudad de Jacona, Michoacán, México en el Valle de Zamora, prestigioso por tener las mejores condiciones para la producción de berries.",
            "Está fundamentada en trabajar bajo los estrictos controles de seguridad alimentaria, buscando siempre la innovación de sus procesos y la tecnología de vanguardia de la industria alimenticia.",
            "Hemos trabajado con ellos a lo largo de 8 años y para cubrir sus necesiades de comunicación hacemos uso de todos nuestros servicios, que van desde el Branding, fotografía de producto, diseño de mascotas, producción de stands, producción de impresos, diseño de empaque, manejo y estrategia de redes sociales, diseño web y desarrollo de aplicaciones, entre muchos otros.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955679/agency/samfrut/cdptvvuq6drq4edxy1gn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955679/agency/samfrut/iriwe90eugzdhshbn6cu.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955689/agency/samfrut/f1voxm7fjmswvpyv7haj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955689/agency/samfrut/m3gmngqolp0lf0absjul.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955680/agency/samfrut/aic5fgbwcgrylxbvulfb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955681/agency/samfrut/c48htitnufzb66iksgwi.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955682/agency/samfrut/crunnzkpiswl5ndntv3p.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955683/agency/samfrut/acsqzvov6oajscxzaaeh.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955684/agency/samfrut/mvndxn7szr9dfgvezlna.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955685/agency/samfrut/y3bq5fpkukl6ydz2zwrd.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955687/agency/samfrut/giymu3qswmh0k0talswn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955687/agency/samfrut/e11aacznk8nqplgoonyw.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955693/agency/samfrut/qjjxljlwjqbp8pmtnbwd.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955691/agency/samfrut/vxzu8aleflbm5v7gz2xx.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955692/agency/samfrut/arr1vjy9kx5nlsqaoas5.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710955695/agency/samfrut/fkjv4dyimg11jsiwdmm8.webp",
              ["branding"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/lukffsbmidhfaeks1nic.webp",
        tags: "branding / foto y video",
        to_projects: "Fresam, Lago de Plata, SoA Mobiliario",
      },

      {
        id: 6,
        titulo: "SoA Mobiliario",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891711/agency/soa/ahtnqu3rz7riodlxctiz.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891712/agency/soa/x7bzuoh5j3smq2rqpcja.webp",
        descripcion: {
          text: [
            "es una marca dedicada al diseño de proyectos de interiorismo, reforzados por la venta de mobiliario, cuyo catálogo es curado cuidadosamente para ofrecer productos llenos de personalidad para todos los presupuestos.",
            "Estamos orgullosos de estar trabajando con ellos y poder observar su crecimiento y progreso a lo largo de los años.",
            "Para ellos hemos desarrollado diferentes soluciones de Branding, Desarrollos web, Estrategia de marca y redes sociales, Producción de contenido y video.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891709/agency/soa/nvjicxswjqymh1js5twq.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891710/agency/soa/cjaasgp2ynoo1gk7x6d2.webp",
              ["social media"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891859/agency/soa/v850vdjq8pgqnobzo6qk.gif",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710891859/agency/soa/v850vdjq8pgqnobzo6qk.gif",
              ["social media"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/p4sgwofavhy948mf26bi.webp",
        tags: "Social Media",
        to_projects: "Lago de Plata, Samfrut, Taster Meats",
      },

      {
        id: 7,
        titulo: "Taster Meats",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953010/agency/tastermeats/zsciihxg3ekmgisgprmh.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953011/agency/tastermeats/yzufcxl8efldotmp5oea.webp",
        descripcion: {
          text: [
            "es una empresa procesadora y productora de productos cárnicos. Enfocados en la carne para asar, tanto en presentaciones de hamburguesas, como presentaciones de piezas sazonadas listas para asar.",
            "Hemos tenido el honor de trabajar con ellos en el diseño y producción de sus líneas principales de productos de hamburguesa. Destacando entre nuestras actividades la fotografía de producto, que se utilizaría tanto en empaques como en comunicación gráfica y redes sociales, como en el diseño de sus empaques. Mismos que serían adaptados a varias presentaciónes de tamaño.",
            "Dentro de sus planes futuros estan el producir una línea de productos a base de carne de pollo, misma en la que hemos participado en su planeación y diseño.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952961/agency/tastermeats/qh6s8s14cvgr8guxaohf.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952962/agency/tastermeats/gtfl9clu34ttnjex84r9.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/sjdmqcjian9n4zlplbse.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952963/agency/tastermeats/vub1h0lggrjhcswrywht.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952964/agency/tastermeats/cjcnnidbqwwrmncgeetx.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952965/agency/tastermeats/bnlrjjio0k4mbkypbmus.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952966/agency/tastermeats/jouc1qlmkddyllfktspv.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952967/agency/tastermeats/wwutfjs35bb24rxosdto.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/dnckleqp0gnqw1j94c7o.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952968/agency/tastermeats/zcpwv3ch7jnctqacuwoy.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952969/agency/tastermeats/p2mrkhr8v4ko82coxg53.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952970/agency/tastermeats/iwzmzawtyw5opsxiwiew.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/m3sw6jhig4q1uzo8k1jr.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952971/agency/tastermeats/slvieupbjufybc3bnnid.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710952999/agency/tastermeats/csgfq6kjavfiydnrejgi.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953000/agency/tastermeats/nqrakgzciokllxvzlzru.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953001/agency/tastermeats/ofbwkqxaz5cjwnaki6ar.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953002/agency/tastermeats/idoer2hi6uavog2fre2f.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953003/agency/tastermeats/v35eghpi1grzcb4srsu7.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953004/agency/tastermeats/weknsttnlcf4av6wisca.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/cphytwwum65fsbe2w7so.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953005/agency/tastermeats/gb8tx4u9lcsnwo6vksas.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/l0v5ebixvjcvc2yuwria.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953007/agency/tastermeats/biaw8lqak78jmztpsu2x.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953008/agency/tastermeats/zy6m9x88gpcqngavccek.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710953009/agency/tastermeats/mygm6nfhcnlcum4scnjd.webp",
              ["branding"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/fwf714fh2itysflondux.webp",
        tags: "Branding",
        to_projects: "Fresam, Samfrut, SoA Mobiliario",
      },

      {
        id: 8,
        titulo: "Umisama Sushi Bar",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/wsush0jqd9pjiymtubhz.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977110/agency/umisama/hrtjlxpyarrvlfm2awc6.webp",
        descripcion: {
          text: [
            "es un restaurante que forma parte de Grupo A La Mesa, junto con sus marcas hermanas Umikumo, Almancén del Bife y Ladrillo.",
            "Ofrece una experiencia jóven y llena de energía, además de una amplia variedad de estilos de sushis regionalizados para el mercado Mexicano. Actualmente cuenta con una sucursal en San Luis Potosí, con miras de expandirse a otros estados de la República.",
            "Para este proyecto desarrollamos la propuesta de Branding acompañada de nuestra Dirección Creativa para solventar los temas de fotografía de producto, estrategia de redes sociales, producción de video y comunicación general de la marca.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/emtep9omiputqfzezyh3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/orrpxzfu7osciiq0dd83.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/zjbur8smr0gdrywcmlgn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/uxmxvdirrc7foagcuded.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/r06oyoysdbksuljqgyso.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977107/agency/umisama/qffxpuduoqfmzw6s7mid.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/cuwucm8lpg7pcozebf4g.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/nchhredhfvizzj6yhx9s.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/mc51fhgn57zilbbxkuvt.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977108/agency/umisama/cvi1n9ydrnhauawmkgd6.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/pxduam8zqy49hn6cfy6o.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/yxrk1fh2rs83kvvyb8c4.webp",
              ["social media"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/bs9s5n90ipigrjkghmuz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710977109/agency/umisama/otqlgfcsj1x7urwcqbw3.webp",
              ["social media"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812045/agency/agency_clientes/pidihks1za4ctx1bmand.webp",
        tags: "Social Media",
        to_projects: "El Almacen, Ladrillo Empanadas, Umikumo",
      },

      {
        id: 9,
        titulo: "Umikumo",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886931/agency/umikumo/bjjk8udafushzma8djpd.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886904/agency/umikumo/f5usx9i8ucsjgyfj72xy.webp",
        descripcion: {
          text: [
            "Umikomo es un restaurante de estilo tradicional japonés. Forma parte de Grupo A La Mesa junto con sus marcas hermanas Umisama, Almacén del Bife y Ladrillo.",
            "Su enfoque principal es ofrecer una alta experiencia culinaria lo más fiel posible a las barras Omakase tradicionales, que son una de las principales referencias culturales japonesas reconocidas en todo el mundo.",
            "Actualmente cuenta con dos locaciones, una en León, Guanajuato y la otra en San Luis Potosí. Para este proyecto se han requerido una gama amplia de nuestros servicios, que inlcuyen Branding, Edición fotográfica, Estrategia y planeación de redes sociales, producción de materiales audiovisuales y Dirección creativa entre muchas otras.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886884/agency/umikumo/vsiboijvsqait8aokhjg.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886884/agency/umikumo/mpyteszddwxmqwm4se5f.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886885/agency/umikumo/sh0qekotqx4gw8cdocrp.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886886/agency/umikumo/pbpmosmvdbtzlv0lz2ro.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886887/agency/umikumo/yoq9hnlzsv0kalwuxc2t.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886887/agency/umikumo/vfxgbfgev4rcbwibxumq.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886888/agency/umikumo/hggb1qazgbhlwgf2v0uq.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886889/agency/umikumo/kq24acmgwrvuyjyluztu.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886890/agency/umikumo/q6hzu2c2nxghnvmlpo48.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886891/agency/umikumo/al6xvljskiflak7kvcbk.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886891/agency/umikumo/aygbtqlmb58w9cruxtxy.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886892/agency/umikumo/pwrihfwnoxocxgcppoi8.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886893/agency/umikumo/ynoc9ickhhnsmuoygfxh.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886894/agency/umikumo/gwrt97nbm7udfr0glk2i.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886895/agency/umikumo/pwvnijepvydzwt7nojzj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886895/agency/umikumo/umsmlasearhkqaetqqco.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886896/agency/umikumo/eadzcakuqaudemne5t6b.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886897/agency/umikumo/zftqcwd7tfabsgp5sbah.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886898/agency/umikumo/hu6w5grhroetgzsd6fcb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886898/agency/umikumo/y9g3fsbkzwcfo5gaxn12.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886899/agency/umikumo/vyzrwugz9xjmiqeearnm.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886900/agency/umikumo/ehgt2u1oyor3lndxmh3l.webp",
              ["social media"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886901/agency/umikumo/srqry8kvomggbfesfeku.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886901/agency/umikumo/n8dkmeuixe1pwdqn6r9k.webp",
              ["foto y video"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886902/agency/umikumo/ql7jn6riwiql5jfcyxp3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710886903/agency/umikumo/e1q9uujfigfykcb5dmxe.webp",
              ["social media"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/w8tfx7hnmmyhuwsteic5.webp",
        tags: "Branding / Foto y video / Social Media",
        to_projects: "El Almacen, Ladrillo Empanadas, Umisama Sushi Bar",
      },

      {
        id: 10,
        titulo: "Fletes Nueva Galicia",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Portada_rkcb1v.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/10_2_banfdl.webp",
        descripcion: {
          text: [
            "FNG Fletes Nueva Galicia es una empresa mexicana con más de 20 años de experiencia en el sector de transporte y logística. Especializada en el servicio de fletes terrestres de carga, FNG ofrece soluciones eficientes, seguras y a tiempo para la distribución de mercancías a nivel nacional. Con una flota moderna y personal altamente capacitado, se distingue por su compromiso con la calidad, puntualidad y atención al cliente, adaptándose a las necesidades específicas de cada cliente para garantizar su satisfacción.",
            "Apoyamos a la empresa en la creación de su logotipo, el desarrollo de representaciones visuales a través de maquetas mockup para su branding, así como el diseño de su página web utilizando metodologías DCU y principios de UX/UI. Nuestro enfoque buscó fortalecer la identidad de la marca, impulsándola de manera efectiva para cumplir con sus necesidades de comunicación y presencia digital.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Frame_1261153710_exyzfh.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Group_1000003285_cmt0vq.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Caja_hfwltu.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Caja-1_k8dswx.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Logo_Edificio_ll9wd7.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Logo_Edificio-1_rtchwe.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Fletes_x05l8v.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Fletes-1_pk0gbl.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Gafete_prxlwp.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Gafete-1_ncdcvf.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Web_nz0oo9.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Web-1_lezsvg.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Frame_1261153713_nxsclr.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Frame_1261153713-1_whtuew.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Frame_1261153718_esifez.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Group_1000003279_uvovje.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Frame_1261153715_xtb0ku.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Group_1000003280_hkepjd.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Frame_1261153714_ifwewt.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Frame_1261153714-1_l72ano.webp",
              ["desarrollo web y apps"],
            ],

            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Group_1000003227_zfgb3r.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Caso_de_estudio1_plfvic.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Web_qokykj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Caso_de_estudio2_sxj5rf.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Web2_Acerca_xhw57n.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Caso_de_estudio3_sskad5.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Group_1000003228_afcqvz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Caso_de_estudio4_f3vppy.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Group_1000003229_gwovy4.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Caso_de_estudio5_r97sue.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Group_1000003230_jigonl.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/fletes/Caso_de_estudio6_d8qyy6.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Web_nz0oo9.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Caso_de_estudio7_vyrzkc.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/fletes/Group_1000003231_mfyn1x.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Caso_de_estudio7_vyrzkc.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/fletes/Group_1000003232_pxccjf.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Caso_de_estudio8_i527yh.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Group_1000003233_mfotuc.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Caso_de_estudio9_swiazc.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Group_1000003234_n9ecwi.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Caso_de_estudio10_v5tz3x.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/fletes/Group_1000003235_rt5rgn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/fletes/Logo_n1r3di.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/368x390_w7clos.webp",
        tags: "Branding / Web",
        to_projects: "MiBici, TCy+, Promakers",
      },

      {
        id: 11,
        titulo: "Promakers",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003286_e602ab.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003290_oqx6xx.webp",
        descripcion: {
          text: [
            "Promakers es una empresa con 10 años de experiencia, especializada en ofrecer soluciones integrales en materiales, elaboración y logística, stands, renders, siempre con un enfoque en la entrega puntual y en la calidad esperada. Su portafolio abarca una amplia gama de productos, como MDF, melamina, acrílico, vidrio, materiales de construcción, iluminación y más, con el objetivo de satisfacer las diversas necesidades de sus clientes.",
            "La empresa trabaja con marcas de renombre como Coca-Cola, Corona, Miller, Electrolit, entre otras, proporcionando soluciones personalizadas para proyectos de diferentes magnitudes y sectores. 	Apoyamos a la empresa en la creación de su logotipo, con el objetivo de dotarla de una identidad única que le permitiera destacarse en su sector. Además, desarrollamos su página web utilizando metodologías como DCU y Design Thinking, implementando herramientas como Figma para ofrecer una experiencia visual y funcional de alta calidad. Con este enfoque, logramos darle a la empresa la presencia digital que necesitaba, mejorando la interacción con sus usuarios y brindando una experiencia óptima.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Logo_variants_fel3d5.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Portada_v3zq3u.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003284_j8mvch.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003283_an6lup.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Frame_1261153729_gjcc9i.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/06_10_ddfds2.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/Frame_1261153725_aam2g2.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/promakers/01_801_riwchm.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/tarjetas_Promakers_1_htmr0j.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/tarjetas_Promakers_1-1_w5j4vf.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/02_15_nnc7vj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/02_15-1_gzz8tm.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Frame_1261153748_zctvjq.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Frame_1261153726_gqpuwa.webp",
              ["desarrollo web y apps"],
            ],

            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003236_rnec2p.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003249_oqwztc.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003237_b46zkz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003250_gowglp.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003238_eugxcw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003224_iwlo9h.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003239_l6bpul.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/Group_1000003251_dkbpsg.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/Group_1000003240_c56reb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/promakers/Group_1000003252_q0qgts.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003241_iubaq1.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003253_erdzwg.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003242_dqjflw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003254_qn0ivp.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003243_h0zsnk.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003255_ko0gtf.webp",
              ["desarrollo web y apps"],
            ],

            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003244_dpjzhc.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/Group_1000003256_qxwvpj.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948761/agency/promakers/Group_1000003245_zhibnl.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948762/agency/promakers/Group_1000003257_qxlfyq.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003246_hdp1j4.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948764/agency/promakers/Group_1000003258_prpfrz.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003247_hhzvqs.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003259_wa2krn.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948759/agency/promakers/Group_1000003248_sforby.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1710948760/agency/promakers/Group_1000003260_zgwrr9.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1713812044/agency/agency_clientes/368x390-1_wnxfah.webp",
        tags: "Branding / Web",
        to_projects: "Fresam, TCy+, Promakers",
      },

      {
        id: 12,
        titulo: "Luxury Stone",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805559/agency/luxury/Portada_iagk8h.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805558/agency/luxury/Portada-1_uw3fja.webp",
        descripcion: {
          text: [
            "El manual de identidad de Luxury Stone establece las directrices visuales y conceptuales que garantizan una comunicación coherente y profesional de la marca. Desde el logotipo principal y sus aplicaciones hasta el uso tipográfico y cromático, cada elemento refleja la esencia premium y sofisticada de la empresa.",
            "Nuestro equipo proporciona ejemplos de implementación en diferentes medios, como redes sociales, asegurando que la identidad de Luxury Stone se mantenga consistente y alineada con su posicionamiento en el mercado de bienes raíces de lujo.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805554/agency/luxury/colores_vpexcw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805554/agency/luxury/colores-1_jnqnss.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805558/agency/luxury/Personalidad_i7l1j9.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805558/agency/luxury/Personalidad-1_kkx9y0.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805559/agency/luxury/Significado_de_Logo_kjn69d.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805559/agency/luxury/Significado_de_Logo-1_yg5fsn.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805560/agency/luxury/Variantes_ujawnn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805559/agency/luxury/Variantes-1_vqm15i.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805557/agency/luxury/Frame-16_v9jm7s.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805557/agency/luxury/Frame-17_fldxsk.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805557/agency/luxury/Frame-14_tdsglc.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805557/agency/luxury/Frame-15_gddji7.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805556/agency/luxury/Frame-12_b9tt6c.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805556/agency/luxury/Frame-13_wiulee.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805556/agency/luxury/Frame-10_hj9vh2.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805556/agency/luxury/Frame-11_jlcfhp.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-8_q3afao.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-9_iyp7tf.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-6_o6khu3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-7_zqlmn9.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-4_apqww9.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-5_qwwlno.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805555/agency/luxury/Frame-2_hdssad.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805554/agency/luxury/Frame-3_bvpapv.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805557/agency/luxury/Frame_b1ibhj.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805554/agency/luxury/Frame-1_kfgdtj.webp",
              ["branding"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739812800/agency/agency_clientes/368x390_wocrjt.webp",
        tags: "Branding",
        to_projects: "Lago de Plata, SoA Mobiliario, Serenity Tower",
      },

      {
        id: 13,
        titulo: "Serenity Tower",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805760/agency/serenity/Portada_t6pfop.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805760/agency/serenity/Portada-1_nhwckq.webp",
        descripcion: {
          text: [
            "El manual de identidad de Serenity Lux Tower define los lineamientos visuales y conceptuales que reflejan su esencia de lujo y diseño biofílico. Ubicada en Punto Sao Paulo, Guadalajara, a solo 4 minutos del Country Club, esta torre en construcción busca integrar elegancia y naturaleza en un entorno premium.",
            "La identidad visual de Serenity Lux Tower se compone de una paleta de colores sofisticada, tipografías elegantes y un diseño atemporal, garantizando coherencia en su comunicación y posicionamiento en el mercado inmobiliario de alto nivel.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805759/agency/serenity/Paleta_de_colores_z01yyz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805759/agency/serenity/Paleta_de_colores-1_wynpz9.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805763/agency/serenity/Tipografias-2_c1vkk7.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805764/agency/serenity/Tipografias-3_umbacb.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805764/agency/serenity/Tipografias_rkewqn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805762/agency/serenity/Tipografias-1_b6ojvg.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805762/agency/serenity/Tarjetas_de_presentacion_qihpj3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805762/agency/serenity/Tarjetas_de_presentacion-1_akahtk.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805761/agency/serenity/Tarjetas_de_presentacion_2_mwlaun.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805761/agency/serenity/Tarjetas_de_presentacion_3_gn9z2z.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805761/agency/serenity/Revistas_ntdek3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805760/agency/serenity/Revistas-1_zbyyua.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805757/agency/serenity/Hoja_membretada_gpebvm.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805757/agency/serenity/Hoja_membretada-1_pywemv.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805759/agency/serenity/Letreros_tp3bsw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805758/agency/serenity/Letreros-1_fvttip.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805756/agency/serenity/App_htduxp.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805755/agency/serenity/App-1_slmgqd.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805758/agency/serenity/Letreros-2_pmxmvb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805759/agency/serenity/Letreros-3_tawhkn.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805757/agency/serenity/Celulares_mf7pne.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805756/agency/serenity/Celulares-1_p5kpp0.webp",
              ["branding"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805756/agency/serenity/Celulares-2_t7dytp.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739805757/agency/serenity/Celulares-3_jmif6e.webp",
              ["branding"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1739812805/agency/agency_clientes/368x390_ixwpat.webp",
        tags: "Branding",
        to_projects: "Luxury Stone, SoA Mobiliario, Lago de Plata",
      },

      {
        id: 14,
        titulo: "TCy+",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492950/agency/tcy/TCyMas_01_g0eg39.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492946/agency/tcy/TCyMas_14_wh4vpf.webp",
        descripcion: {
          text: [
            "TCy+ es una de las principales empresas de venta de tecnología y cómputo en el país, ofreciendo un catálogo extenso de productos que abarca desde equipos de alto rendimiento hasta accesorios y soluciones para el hogar y la oficina. Con una sólida presencia en el sector, se ha consolidado como un referente para clientes que buscan innovación, calidad y un servicio excepcional.",
            "Para potenciar su crecimiento y optimizar la experiencia de sus clientes, se desarrolló una mega tienda en línea capaz de administrar y procesar más de 30 mil productos de manera eficiente. La plataforma fue diseñada con una arquitectura robusta que garantiza velocidad, estabilidad y una navegación intuitiva, permitiendo a los usuarios encontrar lo que necesitan con facilidad.",
            "El proyecto abarcó un diseño UX/UI impecable, alineado con la identidad de la marca, el perfil de sus clientes y la operación de la tienda. Cada detalle fue cuidadosamente trabajado para ofrecer una experiencia de compra fluida, atractiva y funcional, asegurando que TCy+ continúe liderando en el competitivo mundo del comercio electrónico.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492944/agency/tcy/TCyMas_2_cegbvw.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492947/agency/tcy/TCyMas_15_n2f7t3.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492949/agency/tcy/TCyMas_3_ebgeqi.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492947/agency/tcy/TCyMas_16_sokczg.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492944/agency/tcy/TCyMas_4_te0twf.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492945/agency/tcy/TCyMas_17_avvpny.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492946/agency/tcy/TCyMas_5_bjdygn.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492950/agency/tcy/TCyMas_18_tdyrxl.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492945/agency/tcy/TCyMas_6_jayizy.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492945/agency/tcy/TCyMas_19_zsafox.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492951/agency/tcy/TCyMas_7_coqcq0.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492948/agency/tcy/TCyMas_20_bynu6t.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492944/agency/tcy/TCyMas_9_hzfv8i.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492949/agency/tcy/TCyMas_21_tj5qhq.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492949/agency/tcy/TCyMas_8_hflibf.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492948/agency/tcy/TCyMas_22_cxmwib.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492952/agency/tcy/TCyMas_10_m00ddx.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492946/agency/tcy/TCyMas_23_a3kbgd.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492948/agency/tcy/TCyMas_11_mz7wom.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492952/agency/tcy/TCyMas_24_pwlo4i.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492951/agency/tcy/TCyMas_12_odwcro.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492952/agency/tcy/TCyMas_25_dloybg.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492951/agency/tcy/TCyMas_13_bwsrqg.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492953/agency/tcy/TCyMas_26_inswho.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742492775/agency/thumbs/TCyMas_27_gbxa3y.webp",
        tags: "desarrollo web y apps",
        to_projects: "Promakers, Fletes Nueva Galicia, Fresam",
      },
      {
        id: 15,
        titulo: "MiBici",
        portada:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921245/agency/mibici/MiBici_01_lqoga2.webp",
        portada_sm:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_10_xwlwh9.webp",
        descripcion: {
          text: [
            "MiBici es el sistema de bicicletas públicas del Gobierno de Jalisco, ofreciendo a los ciudadanos una alternativa de movilidad ágil y sostenible. Su aplicación móvil es clave para gestionar viajes y acceder a información en tiempo real.",
            "El proyecto consistió en mejorar la app, corrigiendo errores y optimizando su rendimiento. Se añadieron funciones como el escaneo de códigos QR para liberar bicicletas y se mejoró la estabilidad general, brindando una experiencia más fluida.",
            "También se incorporó el modo oscuro, mejorando la visibilidad en entornos de poca luz y optimizando el consumo de batería. Con estas mejoras, MiBici evoluciona para ofrecer un servicio más eficiente y accesible.",
          ],
        },
        images: {
          img: [
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921245/agency/mibici/MiBici_2_upa1gb.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_11_mihlpt.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_3_gwzpuh.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921248/agency/mibici/MiBici_17_tggpsm.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_4_m6x7gz.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921248/agency/mibici/MiBici_18_bjtfjn.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_5_uviwog.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_12_llaqec.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_6_vhr6km.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921247/agency/mibici/MiBici_13_ebvn3y.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_7_kijhs4.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921248/agency/mibici/MiBici_14_gjyxxh.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_8_eey40o.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921248/agency/mibici/MiBici_15_nr5fcl.webp",
              ["desarrollo web y apps"],
            ],
            [
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921246/agency/mibici/MiBici_9_xmydh3.webp",
              "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921248/agency/mibici/MiBici_16_zw11zg.webp",
              ["desarrollo web y apps"],
            ],
          ],
        },
        miniatura:
          "https://res.cloudinary.com/dp9ldjfem/image/upload/v1742921336/agency/thumbs/Mi_bici_thumb_jytiyy.webp",
        tags: "desarrollo web y apps",
        to_projects: "TCy+, Fletes Nueva Galicia, Fresam",
      },
    ]);
}
