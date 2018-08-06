class FilesPane {
    constructor(document) {
        this._filesDiv = document.getElementById('files');
        this._filesDiv.appendChild(document.createElement('ul'));
    }

    addFileToDiv(filename) {
        this._filesDiv.querySelector('ul').innerHTML += this._createFileDiv(filename);
    }

    _createFileDiv(filename) {
        return `<li class="filename">${filename}</li>`
    }
}

module.exports = FilesPane;