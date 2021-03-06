var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
router.param('quizId', quizController.load); //load()
//Rutas
//pregunta
 router.get('/quizes', quizController.index);
//respuesta
router.get('/quizes/:quizId(\\d+)', quizController.show);

router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
 
//autor
router.get("/author", function(req, res) {
	res.render("author");
});



module.exports = router;
