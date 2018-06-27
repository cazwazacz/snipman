class FilesPane {
    constructor(document) {
        this._filesDiv = document.getElementById('files');;
    }

    addFileToDiv(filename) {
        this._filesDiv.innerHTML += this._createFileDiv(filename);
    }

    _createFileDiv(filename) {
        return `<div class="filename">${filename}</div>`
    }
}

module.exports = FilesPane;