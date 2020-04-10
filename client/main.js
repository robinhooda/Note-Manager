import { Template } from 'meteor/templating';
import { Notes } from '../lib/collection.js';

import './main.html';

Template.body.helpers({
 /* 
  notes:[
    {text:'my note 1'},
    {text:'my note 2'},
    {text:'my note 3'}
  ]
*/
 notes(){
   return Notes.find({});
 }
})