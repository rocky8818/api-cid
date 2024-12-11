# API de la web de cid

## Base de datos

La base de datos realizada con astro:db una integración de drizzle. 
La api tendrá 3 colecciones, Banners ( utilizados en la web de agencia ), proyectos ( utilizados en ambos, dev y agencia ) y servicios ( utilizados en agencia )

Para que los proyectos, se puedan utilizar en dev, fue necesario agregarle un tag a las imágenes de los proyectos. Teniendo las siguientes opciones: web, branding, foto y video, stands y produccion, social media, ads de google y social media, arquitectura e interiorismo. La manera en la que se implementan en la base de datos es la siguiente.

## Endpoints
La api tiene 6 endpoints, (getbanners, getservices, getprojects) estos te devuelven la colección completa de sus productos. También están los endpoints, onebanner/[id] oneproject/[id] y oneservice/[id]


## Test endpoints
- run `npm run dev`
- You will see the json exposed on this url 'http://localhost:xxxx/api/getProjects' 