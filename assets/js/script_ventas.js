const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Casa típica sur de Chile',
    src: 'https://magisur.cl/wp-content/uploads/2024/04/ml-47-1-scaled.jpg.webp',
    descripcion: 'Casa totalmente tradicional del sur de chile',
    ubicacion: 'Camino sin numero, Puerto varas',
    habitaciones: 5,
    banos: 3,
    costo: 80000,
    smoke: true,
    pets: false
    }
    ]

let text_html = ''
let index_html = ''
let text_propiedad = ''
i = 0

for (let propiedad of propiedades_venta) {
// console.log(propiedad.nombre)
// }
    text_html += `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src='${propiedad.src}'
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
        ${propiedad.nombre}
        </h5>
        <p class="card-text">
        ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.banos} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        `

if (propiedad.smoke==false) {
    text_html += `
        <p class="text-danger">
        <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>    
        `
    } 
else if (propiedad.smoke==true) {
    text_html += `
    <p class="text-success">
    <i class="fas fa-smoking"></i> Permitido fumar
    </p>
    `
}

if (propiedad.pets==false) {
    text_html += `
        <p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas
        </p>    
        `
    } 
else if (propiedad.pets==true) {
    text_html += `
    <p class="text-success">
    <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
    `
}
text_html += `
      </div>
    </div>
  </div>
`
i += 1
if (i <= 3){
    index_html += text_html
}
text_propiedad += text_html
text_html = ''
}

try {
    propVenta = document.getElementById('propiedadesVenta')
    propVenta.innerHTML = text_propiedad
} catch {console.log('html grande no insertado')}
try {
    indexVenta = document.getElementById('indexVenta')
    indexVenta.innerHTML = index_html
} catch { console.log('html pequeño no insertado')}