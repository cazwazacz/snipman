const fs = require('fs');
const menubar = require('./app/js/menubar');
const FileHandler = require('./app/js/fileHandler');
const Window = require('./app/js/window');
const windowInstance = new Window(document);
const fileHandler = new FileHandler(windowInstance);

menubar.set(fileHandler.saveCode);

const filenames = document.getElementsByClassName('filename');

fileHandler.getFiles();
fileHandler.openFile('hello.js');
fileHandler.addSaveCodeListeners();
fileHandler.addListeners(filenames);

