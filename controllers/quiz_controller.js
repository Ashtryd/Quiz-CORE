var models= require('../models/models.js');

exports.load= function(req, res, next, quizId){
  models.Quiz.find(quizId).then(
    function(quiz){
      if(quiz){
        req.quiz=quiz;
        next();
      } else{
        next(new Error('No existe el quizId '+ quizId));
      }
    }
  ).catch(function(error) { next(error);});
}
exports.question= function(req, res){

//GET quizes/:id
exports.show= function(req, res){
  models.Quiz.find(req.params.quizId).then(function(quiz){
    res.render('quizes/show', {quiz : req.quiz});
  });
 }
 

//GET quizes
exports.index = function(req, res) {
 if(req.query.search){
    models.Quiz.findAll({where: ["pregunta like ?",
    "%"+req.query.search.replace(" ","%")+"%"]}).then(function(quizes) {
      res.render('quizes/index.ejs', { quizes: quizes});
    });
  }else{
    models.Quiz.findAll().then(function(quizes) {
      res.render('quizes/index.ejs', { quizes: quizes});
    });
  }
}



 // GET /quizes/answer
 exports.answer= function(req, res){

  models.Quiz.find(req.params.quizId).then(function(quiz){
    
    if(req.query.respuesta === req.quiz.respuesta){
      res.render('quizes/answer', {quiz: req.quiz , respuesta: 'Correcto'});
    } else{
      res.render('quizes/answer', {quiz : req.quiz , respuesta: 'Incorrecto'});
   }
  });
 }
 
