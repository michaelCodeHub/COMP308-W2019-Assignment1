let express = require('express');
let router = express.Router();

let showIndexPage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };


let showAboutPage = (req, res, next) => {
    res.render('about', { title: 'About' });
  };

let showServicePage = (req, res, next) => {
    res.render('services', { title: 'Services' });
  };

let showProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
  };

let showContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
  };
  

  module.exports = {
      showIndexPage,
      showAboutPage,
      showContactPage, 
      showProjectsPage,
      showServicePage
  }