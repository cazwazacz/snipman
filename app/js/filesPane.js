class FilesPane {
    constructor(document) {
        this._filesDiv = document.getElementById('files');
        this._filenames = document.getElementsByClassName('filename');
        this._newButton = document.getElementById('new-button');
        this._filesDiv.appendChild(document.createElement('ul'));
    }

    filenames() {
        return this._filenames;
    }

    newButton() {
        return this._newButton;
    }

    addFileToDiv(filename) {
        this._unorderedList().innerHTML += this._createFileDiv(filename);
    }

    clearDiv() {
        this._unorderedList().innerHTML = '';
    }

    _unorderedList() {
        return this._filesDiv.querySelector('ul');
    }

    _createFileDiv(filename) {
        return `<li class="filename">${filename}</li>`
    }
}

module.exports = FilesPane;