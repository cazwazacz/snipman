const fs = require('fs');

class FileHandler {
    constructor(windowInstance) {
        this.windowInstance = windowInstance;
        this.saveCode = this.saveCode.bind(this);
    }

    saveCode() {
        let codeBody = this.windowInstance.code.getValue();
    
        fs.writeFile('files/hello.js', codeBody, (err) => {
            if(err) { return console.log("Could not save file!"); }
            
            console.log("File saved successfully!");
        })
    }

    openFile(filename) {
        this._readFile(filename);
    }

    getFiles() {
        fs.readdirSync(__dirname + '/../../files/').forEach(filename => {
            this.windowInstance.addFileToDiv(filename);
        })
    }

    addListeners(buttons) {
        for(let i = 0; i <= buttons.length - 1; i++) {
            buttons[i].addEventListener('click', (e) => {
                for(let i = 0; i <= buttons.length - 1; i++) {
                    buttons[i].id = '';
                }
        
                e.target.id = 'selected-file';
        
                let filename = e.target.innerText;
        
                this._readFile(filename);
            })
        }
    }

    _readFile(filename) {
        fs.readFile(this._filePath(filename), 'utf-8', (err, data) => {
            if (err) {throw err};

            this.windowInstance.code.setValue(data);
        })
    }

    _filePath(filename) { return `files/${filename}`; };
}

module.exports = FileHandler;