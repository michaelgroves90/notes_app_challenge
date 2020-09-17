'use strict'

// document.getElementById("app").innerHTML = "howdy";

class NoteController {

  constructor(notelist) {
    var newNote = new Note('Favourite drink: seltzer')
    notelist.createNote(newNote)
    console.log(notelist)
    this.noteView = new NoteListView(notelist)
    
  };

  sendHtml() {
    document.getElementById("app").innerHTML = this.noteView.getHTML();
  };



};

var noteList = new NoteList()
var controller = new NoteController(noteList)
console.log(noteList)
console.log(controller)
console.log(this.noteView);

controller.sendHtml()

