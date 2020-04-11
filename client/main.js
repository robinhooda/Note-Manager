import { Template } from 'meteor/templating';
import { Notes } from '../lib/collection.js';
import { Accounts } from "meteor/accounts-base";

// Acoounts config
Accounts.ui.config({
  passwordSignupFields : 'USERNAME_ONLY'
});

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
   return Notes.find({}, { sort: { createdAt: -1 } });
 }
});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();

    // Get input value
    const target= event.target;
    const text = target.text.value;
    
    // Insert note into collection
    Notes.insert({
      text,
      createdAt: new Date(),
      owner : Meteor.userId(),
      username : Meteor.user().username
    })

    // clear form
    target.text.value='';
    
    // close modal
    // var elem = document.getElementsByClassName("modal");
    // var instance = M.Modal.getInstance(elem);
    // instance.close();
    $('#addModal').modal('close');
    
    return false;
  }
});

Template.note.events({
  'click .delete-note':function(){
    Notes.remove(this._id);
    return false;
  }
})