var path= require('path');

//Cargar Modelo ORM
var Sequelize= require('sequelize');

//Usamos SQLite
var sequelize= new Sequelize(null,null,null,
   			 {dialect: 'sqlite', storage: 'quiz.sqlite'}
    		);

//Importa la definicion de la tabla en quiz.js
var Quiz= sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz= Quiz; //Exporta la definicion en Quiz

//Inicializa la tabla de preguntas
//sequelizw.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().success(function(){
	//success(...) ejecuta el manejador una vez creada la tabla
  //Devuelve numero de filas de la tabla
  Quiz.count().success(function(count){
    if(count === 0){//ls tabla se inicializa solo si esta vacia
      //Crea primera pregunta
      		Quiz.create({pregunta: '¿Capital de Italia?',
      		respuesta: 'Roma'
      })
      .success(function(){console.log('Base de Datos inicializada')});
    };
  });
});
