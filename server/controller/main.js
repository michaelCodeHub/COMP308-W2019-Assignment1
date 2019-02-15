// File Name : controller/main.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Feb 12, 2019

let express = require('express');
let router = express.Router();

//router for index
let showIndexPage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };

//router for about
let showAboutPage = (req, res, next) => {
    res.render('about', { title: 'About' });
  };

//router for service
let showServicePage = (req, res, next) => {
    res.render('services', { title: 'Services' });
  };

//router for projects
let showProjectsPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
  };

//router for contact
let showContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
  };

  //export all the methods
module.exports = {
    showIndexPage,
    showAboutPage,
    showContactPage, 
    showProjectsPage,
    showServicePage
}