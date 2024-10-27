const propiedades_alquiler = [
        {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
        },
        {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
        },
        {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
        },
        {
        nombre: 'Casa mas lujosa de un latino',
        src: 'https://dfmas.df.cl/dfmas/site/artic/20240426/imag/foto_0000000620240426165934/Casa_Vin_a_Manquehue.jpg',
        descripcion: 'Supera tus expectativas de un domicilio',
        ubicacion: 'junta transversal 123, LA',
        habitaciones: 16,
        banos: 9,
        costo: 11000,
        smoke: true,
        pets: true
        }
        ]
    
    let text_html_2 = ''
    let index_html_2 = ''
    let text_propiedad_2 = ''
    i = 0
    
    for (let propiedad of propiedades_alquiler) {
    // console.log(propiedad.nombre)
    // }
        text_html_2 += `
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
        text_html_2 += `
            <p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
            </p>    
            `
        } 
    else if (propiedad.smoke==true) {
        text_html_2 += `
        <p class="text-success">
        <i class="fas fa-smoking"></i> Permitido fumar
        </p>
        `
    }
    
    if (propiedad.pets==false) {
        text_html_2 += `
            <p class="text-danger">
            <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>    
            `
        } 
    else if (propiedad.pets==true) {
        text_html_2 += `
        <p class="text-success">
        <i class="fas fa-paw"></i> Mascotas permitidas
        </p>
        `
    }
    text_html_2 += `
          </div>
        </div>
      </div>
    `
    i += 1
    if (i <= 3){
        index_html_2 += text_html_2
    }
    text_propiedad_2 += text_html_2
    text_html_2 = ''
    }
    
    try {
        propAlquiler = document.getElementById('propiedadesAlquiler')
        propAlquiler.innerHTML = text_propiedad_2
    } catch {console.log('html grande no insertado')}
    try {
        indexAlquiler = document.getElementById('indexAlquiler')
        indexAlquiler.innerHTML = index_html_2
    } catch { console.log('html pequeño no insertado')}