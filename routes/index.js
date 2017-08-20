var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
})

router.get('/resume.pdf', function(req, res) {
    res.sendFile("mikeliu_resume.pdf", { root: 'public/documents' })
})

router.get('/react', function(req, res, next) {
    res.render('react_test.html');
})

router.get('/slideshow', function(req, res, next) {
    res.render('slideshow.html');
})

router.get('/comparison', function(req, res, next) {
    res.render('comparison.html');
})

router.get('/test', function(req, res, next) {
    res.render('react_render_mike.html');
})

router.get('/microsoft', function(req, res, next) {
    res.render('microsoftslideshow.html');
})

router.get('/imo', function(req, res, next) {
    res.render('imoslideshow.html');
})

router.get('/foodie', function(req, res, next) {
    res.render('foodieslideshow.html');
})

router.get('/musicalsurprise', function(req, res, next) {
    res.render('musicshow.html');
})

router.get('/projects', function(req, res, next) {
    res.render('projects.html');
})

module.exports = router;