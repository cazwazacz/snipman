// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
const menubar = require('./menubar');
const files_directory = './files/';
const filesDiv = document.getElementById('files');

menubar.set(saveCode);

getFiles();

var myCodeMirror = CodeMirror(document.getElementById('editor'), {
    value: "function myScript() {return 100;}\n",
    mode: "javascript",
    theme: "darcula"
  });

function saveCode() {
    let codeBody = myCodeMirror.getValue();
    
    fs.writeFile('files/hello.js', codeBody, (err) => {
        if(err) { return console.log("Could not save file!"); }

        console.log("File saved successfully!");
    })
}

function getFiles() {
    fs.readdir(files_directory, (err, files) => {
        files.forEach(file => {
            filesDiv.innerHTML += createFileDiv(file);
        });
    })
}

function createFileDiv(file) {
    return `<div>${file}</div>`;
}