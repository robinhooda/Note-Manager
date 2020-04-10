import { Template } from 'meteor/templating';

import './main.html';

Template.body.helpers({
  notes:[
    {text:'my note 1'},
    {text:'my note 2'},
    {text:'my note 3'}
  ]
})