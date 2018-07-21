const expect = require('chai').expect;
const FilesPane = require('../../../app/js/filesPane');

describe('filesPane', () => {
    let filesPane, document;

    beforeEach(() => {
        document = { getElementById: () => {} }

        filesPane = new FilesPane(document);
    })
    
    describe('#_createFileDiv', () => {
        it('returns the correct string', () => {
            expect(filesPane._createFileDiv('hello')).to.eq('<div class="filename">hello</div>')
        })
    })
});
