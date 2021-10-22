use sensorial-db;

/*=====================================*/
/* ELIMINACION DE DOCUMENTOS */
/*=====================================*/

db.createCollection("usuarios");

/*=====================================*/
/* CARGA DE DATOS */
/*=====================================*/

db.usuarios.insertMany([
    {
        "ultimo_login": ISODate("2021-10-21T19:00:07.797Z"),
        "fecha_creacion": ISODate("2021-08-21T05:38:49.551Z"),
        "mail": "enzope32@gmail.com",
        "nombre": "Enzo Perez",
        "rol": "admin",
        "password": "asd"
    }
]);