const fs = require('fs');
const menubar = require('./app/js/menubar');
const FileHandler = require('./app/js/fileHandler');
const Window = require('./app/js/window');
const windowInstance = new Window(document);
const fileHandler = new FileHandler(windowInstance);

menubar.set(fileHandler.saveCode);

const filenames = document.getElementsByClassName('filename');

fileHandler.getFiles();

for(let i = 0; i <= filenames.length - 1; i++) {
    filenames[i].addEventListener('click', (e) => {
        for(let i = 0; i <= filenames.length - 1; i++) {
            filenames[i].id = '';
        }

        e.target.id = 'selected-file';

        let filename = e.target.innerText;

        fileHandler.readFile(filename);
    })
}
