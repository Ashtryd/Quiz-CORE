var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//pregunta
 router.get('/quizes/question', quizController.question);
//respuesta
 router.get('/quizes/answer',   quizController.answer);
//autor
router.get("/author", function(req, res) {
	res.render("author");
});


module.exports = router;
