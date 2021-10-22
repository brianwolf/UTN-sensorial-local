use sensorial - db;

/*=====================================*/
/* ELIMINACION DE DOCUMENTOS */
/*=====================================*/
db.dashboards.drop();
db.samples.drop();
db.sensors.drop();
db.sessions.drop();
db.usuarios.drop();

/*=====================================*/
/* CREACION DE DOCUMENTOS */
/*=====================================*/
db.createCollection("dashboards");
db.createCollection("samples");
db.createCollection("sensors");
db.createCollection("sessions");
db.createCollection("usuarios");

/*=====================================*/
/* CARGA DE DATOS */
/*=====================================*/


/*USUARIOS*/
/*pass = asd*/
db.usuarios.insertMany([
  {
    ultimo_login: new Date(),
    fecha_creacion: new Date(),
    mail: "enzope32@gmail.com",
    nombre: "Enzo Perez",
    rol: "admin",
    password: "asd",
  }
]);



/*SENSORES*/
db.sensors.insertMany([
{
  "_id" : ObjectId("617217ad92df4d3899a60f7e"),
  "nombre" : "T1",
  "tipo" : "temperatura",
  "MAC" : "T1"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f7f"),
  "nombre" : "T2",
  "tipo" : "temperatura",
  "MAC" : "T2"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f80"),
  "nombre" : "T3",
  "tipo" : "temperatura",
  "MAC" : "T3"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f81"),
  "nombre" : "H1",
  "tipo" : "humedad",
  "MAC" : "H1"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f82"),
  "nombre" : "H2",
  "tipo" : "humedad",
  "MAC" : "H2"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f83"),
  "nombre" : "H3",
  "tipo" : "humedad",
  "MAC" : "H3"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f84"),
  "nombre" : "A1",
  "tipo" : "calidad_del_aire",
  "MAC" : "A1"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f85"),
  "nombre" : "A2",
  "tipo" : "calidad_del_aire",
  "MAC" : "A2"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f86"),
  "nombre" : "A3",
  "tipo" : "calidad_del_aire",
  "MAC" : "A3"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f87"),
  "nombre" : "P1",
  "tipo" : "produccion",
  "MAC" : "P1"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f88"),
  "nombre" : "P2",
  "tipo" : "produccion",
  "MAC" : "P2"
},
{
  "_id" : ObjectId("617217ad92df4d3899a60f89"),
  "nombre" : "P3",
  "tipo" : "produccion",
  "MAC" : "P3"
}
]);

/*TABLEROS*/
db.dashboards.insertMany([
  {
    _id: ObjectId('6172127e911ea80029461f83'),
    fecha_creacion: ISODate('2021-10-22T01:12:09.144Z'),
    nombre: 'Nuevo tablero',
    descripcion: 'un tabero',
    reportes: [],
    objetivos: [],
    indicadores: [
        {
            refreshRate: 10,
            _id: ObjectId('617214c4911ea80029461f8b'),
            name: 'indicador temp single',
            type: 'temperatura',
            sensors: [
                {
                    _id: ObjectId('6172149a2e9fb10007435e05'),
                    nombre: 'T1',
                    tipo: 'temperatura',
                    MAC: 'T1'
                }
            ],
            limitInferior: '10',
            limitSuperior: '50'
        }
    ]
}
 
]);

/*MUESTRAS*/
db.samples.insertMany([
{
  "_id" : ObjectId("6172186a737ef5199e3011a3"),
  "valor" : 2.0,
  "unidad" : "bool",
  "MAC" : "P3",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:59:26.863Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a4"),
  "valor" : 2.0,
  "unidad" : "bool",
  "MAC" : "P3",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:55:05.068Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a5"),
  "valor" : 2.0,
  "unidad" : "bool",
  "MAC" : "P3",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:53:42.393Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a6"),
  "valor" : 1.9504828608844,
  "unidad" : "bool",
  "MAC" : "P2",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:59:35.980Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a7"),
  "valor" : 1.97960908305917,
  "unidad" : "bool",
  "MAC" : "P2",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:55:01.468Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a8"),
  "valor" : 2.0,
  "unidad" : "bool",
  "MAC" : "P2",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:52:38.554Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011a9"),
  "valor" : 1.0035898638517,
  "unidad" : "bool",
  "MAC" : "P1",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:58:45.498Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011aa"),
  "valor" : 0.995939171840764,
  "unidad" : "bool",
  "MAC" : "P1",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:55:53.576Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011ab"),
  "valor" : 0.0,
  "unidad" : "bool",
  "MAC" : "P1",
  "tipo_sensor" : "produccion",
  "fecha" : ISODate("2021-10-12T12:52:15.513Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011ac"),
  "valor" : 65.0031217490896,
  "unidad" : "PPM CO2",
  "MAC" : "A3",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:58:03.513Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011ad"),
  "valor" : 64.371435471656,
  "unidad" : "PPM CO2",
  "MAC" : "A3",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:57:20.648Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011ae"),
  "valor" : 63.9418819168405,
  "unidad" : "PPM CO2",
  "MAC" : "A3",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:52:29.985Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011af"),
  "valor" : 67.6131601615473,
  "unidad" : "PPM CO2",
  "MAC" : "A2",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:58:48.232Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b0"),
  "valor" : 68.3790144941371,
  "unidad" : "PPM CO2",
  "MAC" : "A2",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:56:56.810Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b1"),
  "valor" : 67.748371289983,
  "unidad" : "PPM CO2",
  "MAC" : "A2",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:52:32.152Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b2"),
  "valor" : 78.1193691593717,
  "unidad" : "PPM CO2",
  "MAC" : "A1",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:59:37.140Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b3"),
  "valor" : 78.4856363351582,
  "unidad" : "PPM CO2",
  "MAC" : "A1",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:55:17.405Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b4"),
  "valor" : 77.7604339252694,
  "unidad" : "PPM CO2",
  "MAC" : "A1",
  "tipo_sensor" : "calidad_del_aire",
  "fecha" : ISODate("2021-10-12T12:53:03.024Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b5"),
  "valor" : 67.8517298875845,
  "unidad" : "% HR",
  "MAC" : "H3",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T13:00:07.505Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b6"),
  "valor" : 67.4010532211501,
  "unidad" : "% HR",
  "MAC" : "H3",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:54:59.474Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b7"),
  "valor" : 67.2292507202811,
  "unidad" : "% HR",
  "MAC" : "H3",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:54:42.948Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b8"),
  "valor" : 82.7097958651829,
  "unidad" : "% HR",
  "MAC" : "H2",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:58:46.922Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011b9"),
  "valor" : 83.8015358444555,
  "unidad" : "% HR",
  "MAC" : "H2",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:57:07.564Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011ba"),
  "valor" : 83.1768701659376,
  "unidad" : "% HR",
  "MAC" : "H2",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:52:39.605Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011bb"),
  "valor" : 91.8113337486435,
  "unidad" : "% HR",
  "MAC" : "H1",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:58:27.339Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011bc"),
  "valor" : 91.6443358642821,
  "unidad" : "% HR",
  "MAC" : "H1",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:55:53.743Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011bd"),
  "valor" : 92.1967202574959,
  "unidad" : "% HR",
  "MAC" : "H1",
  "tipo_sensor" : "humedad",
  "fecha" : ISODate("2021-10-12T12:53:22.837Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011be"),
  "valor" : 24.2676097845483,
  "unidad" : "ºC",
  "MAC" : "T3",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:59:15.698Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011bf"),
  "valor" : 24.231923865369,
  "unidad" : "ºC",
  "MAC" : "T3",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:55:53.396Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c0"),
  "valor" : 24.2953744350726,
  "unidad" : "ºC",
  "MAC" : "T3",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:53:15.218Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c1"),
  "valor" : 34.1481879409904,
  "unidad" : "ºC",
  "MAC" : "T2",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:59:47.454Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c2"),
  "valor" : 34.2961050914982,
  "unidad" : "ºC",
  "MAC" : "T2",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:57:09.227Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c3"),
  "valor" : 34.0611190309336,
  "unidad" : "ºC",
  "MAC" : "T2",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:53:12.647Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c4"),
  "valor" : 26.1061818436265,
  "unidad" : "ºC",
  "MAC" : "T1",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:57:39.434Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c5"),
  "valor" : 25.7737792260547,
  "unidad" : "ºC",
  "MAC" : "T1",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:56:13.586Z")
},
{
  "_id" : ObjectId("6172186a737ef5199e3011c6"),
  "valor" : 25.6660940895072,
  "unidad" : "ºC",
  "MAC" : "T1",
  "tipo_sensor" : "temperatura",
  "fecha" : ISODate("2021-10-12T12:54:14.063Z")
}

]);
