import { column, defineDb, defineTable } from 'astro:db';


const  agency_services = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    titulo: column.text(),
    descripcion: column.text(),
    img_social: column.text(),
  }
})

const  agency_projects = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    titulo: column.text(),
    portada: column.text(),
    portada_sm: column.text(),
    descripcion: column.json(),
    images: column.json(),
    miniatura: column.text(),
    tags: column.text(),
  }
})

const  agency_banners = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    titulo: column.text(),
    descripcion: column.text(),
    img_social: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    agency_services,
    agency_projects,
    agency_banners
  }
});
