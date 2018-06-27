const MyCodeMirror = require('./myCodeMirror');
const FilesPane = require('./filesPane');

class Window {
    constructor(document) {
        this.code = new MyCodeMirror(document);
        this.filesPane = new FilesPane(document);
    }

    addFileToDiv(filename) {
        this.filesPane.addFileToDiv(filename);
    }
}

module.exports = Window;