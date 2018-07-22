# Snipman
[Snipman][snipman] is an [electron][electron] app that makes it easy for you to manage code snippets locally!

[![Build Status][shield-travis]][info-travis] [![Test Coverage][shield-coveralls]][info-coveralls] [![License][shield-license]][info-license]

## Requirements
[Snipman][snipman] requires the following:
* [NodeJS][nodejs] - [click here][node-version] for the exact version
* [NPM][npm]

## Quick start
```bash
git clone https://github.com/cazwazacz/snipman.git
cd snipman
npm install
npm run setup
npm test
```

The `npm run setup` command creates a `files` directory in the project which the app uses for storing of files. Currently to start working you have to put javascript file in the `files` directory.

## Running the application
To run the application locally, run:

```bash
npm start
```

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Ensure your changes are tested using [Mocha][mocha]
1. Create a new Pull Request

## License
[Snipman][snipman] is licensed under [MIT][info-license].


[snipman]: https://github.com/cazwazacz/snipman
[electron]: https://electronjs.org/
[nodejs]: https://nodejs.org/
[node-version]: https://github.com/cazwazacz/snipman/blob/master/.node-version
[npm]: https://www.npmjs.com/
[local]: http://localhost:3000
[mocha]: https://mochajs.org/


[info-travis]:   https://travis-ci.com/cazwazacz/snipman
[shield-travis]: https://travis-ci.com/cazwazacz/snipman.svg?branch=master

[info-coveralls]:   https://coveralls.io/github/cazwazacz/snipman
[shield-coveralls]: https://coveralls.io/repos/github/cazwazacz/snipman/badge.svg?branch=master

[info-license]:   https://github.com/cazwazacz/snipman/blob/master/LICENSE
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
