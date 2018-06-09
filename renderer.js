// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs');
const menubar = require('./menubar');
menubar.set(saveCode);

var myCodeMirror = CodeMirror(document.getElementById('editor'), {
    value: "function myScript() {return 100;}\n",
    mode: "javascript",
    theme: "darcula"
  });

function saveCode() {
    let codeBody = myCodeMirror.getValue();
    
    fs.writeFile('hello.js', codeBody, (err) => {
        if(err) { return console.log("Could not save file!"); }

        console.log("File saved successfully!");
    })
}
