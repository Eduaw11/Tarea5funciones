function recuperarClave() {
  console.log("recuperarClave");
}
function cambiarDireccion(Municipio, Calle, Numero) {
  this.direccion.municipio = Municipio;
  this.direccion.calle = Calle;
  this.direccion.numero = Numero;
}

function createUser(
  Nombre,
  Apellido,
  Dpi,
  Email,
  DireccionMunicipio,
  DireccionCalle,
  DireccionNumero
) {
  return {
    nombre: Nombre,
    apellido: Apellido,
    dpi: Dpi,
    email: Email,
    direccion: {
      municipio: DireccionMunicipio,
      calle: DireccionCalle,
      numero: DireccionNumero,
    },
    recuperarClave: recuperarClave,
    cambiarDireccion: cambiarDireccion,
  };
}
let user = {
  nombre: "Paola",
  apellido: "Ortiz",
  dpi: "2938495869384",
  email: "paola@company.ru",
  direccion: {
    municipio: "Jocotenango",
    calle: "Calle ancha",
    numero: 25,
  },
  recuperarClave: recuperarClave,
  cambiarDireccion: cambiarDireccion,
};
let user2 = {
  nombre: "Carmen",
  apellido: "Santiago",
  dpi: "299848573748128",
  email: "carmen@company.ru",
  direccion: {
    municipio: "Guatemala",
    calle: "2 calle",
    numero: 3 - 21,
  },
  recuperarClave: recuperarClave,
  cambiarDireccion: cambiarDireccion,
};
let user3 = {
  nombre: "Henry",
  apellido: "Martinez",
  dpi: "299848573756789",
  email: "henry@company.ru",
  direccion: {
    municipio: "Santa Catarina Pinula",
    calle: "Esperanza",
    numero: 18,
  },
  recuperarClave: recuperarClave,
  cambiarDireccion: cambiarDireccion,
};
let user4 = {
  nombre: "Carlos",
  apellido: "Pineda",
  dpi: "299845721356789",
  email: "carlos@company.ru",
  direccion: {
    municipio: "Jutiapa",
    calle: "las orquideas",
    numero: 60,
  },
  recuperarClave: recuperarClave,
  cambiarDireccion: cambiarDireccion,
};
let user5 = {
  nombre: "Victor",
  apellido: "Palacios",
  dpi: "2876548573756789",
  email: "Victor@company.ru",
  direccion: {
    municipio: "Villanueva",
    calle: "3ra calle",
    numero: 90,
  },
  recuperarClave: recuperarClave,
  cambiarDireccion: cambiarDireccion,
};
let user6 = createUser("Juan","Castro","2309458976456","juan@gmail.com","Zacapa","tamarindo","65")
