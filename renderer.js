const fs = require('fs');
const FileHandler = require('./app/js/fileHandler');
const Window = require('./app/js/window');
const windowInstance = new Window(document);
const fileHandler = new FileHandler(windowInstance);

const filenames = document.getElementsByClassName('filename');

fileHandler.getFiles();
fileHandler.readFile('hello.js');
fileHandler.addSaveCodeListeners();
fileHandler.addListeners(filenames);

