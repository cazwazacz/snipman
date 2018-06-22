// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
const menubar = require('./menubar');
const files_directory = './files/';
const filesDiv = document.getElementById('files');

menubar.set(saveCode);

var myCodeMirror = CodeMirror(document.getElementById('editor'), {
    value: "function myScript() {return 100;}\n",
    mode: "javascript",
    theme: "monokai"
});

function saveCode() {
    let codeBody = myCodeMirror.getValue();
    
    fs.writeFile('files/hello.js', codeBody, (err) => {
        if(err) { return console.log("Could not save file!"); }
        
        console.log("File saved successfully!");
    })
}

function getFiles() {
    fs.readdirSync(files_directory).forEach(filename => {
        filesDiv.innerHTML += createFileDiv(filename);
    })
}

function createFileDiv(filename) {
    return `<div class="filename">${filename}</div>`;
}

const filenames = document.getElementsByClassName('filename');

getFiles();

for(let i = 0; i <= filenames.length - 1; i++) {
    var filename = filenames[i];
    filenames[i].addEventListener('click', (e) => {
        let filename = filenames[i].innerText;

        fs.readFile(`files/${filename}`, 'utf-8', (err, data) => {
            if (err) {throw err};

            myCodeMirror.setValue(data);
        })
    })
}