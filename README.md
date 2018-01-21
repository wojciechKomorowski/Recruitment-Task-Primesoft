# Recruitment-Task-Primesoft

Simple drag and drop application in JavaScript and Bootstrap 3.

To do:

* Restore elements positioning after browser refresh.
* Solve problem with distinguishing click event (modal opening) from mousedown, mousemove and mouseup (drag and drop mechanism).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

Use git clone in console to clone repository to your current location:

```
git -clone https://github.com/wojciechKomorowski/Recruitment-Task-Primesoft.git
```

### Installing

Install [node.js](https://nodejs.org/en/) environment.

After cloning repository just type in console:

```
npm install
```

All packages from package.json devDependencies should be installed in node_modules.

```
"devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^0.28.9",
    "postcss-loader": "^2.0.10",
    "style-loader": "^0.19.1",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.9.4"
  },

```

To use modules you need to run webpack through console in your project location:

```
node_modules/.bin/webpack
```

If you installed webpack globally, you can type:

```
webpack
```

Open new tab in console to run webpack-dev-server:

```
./node_modules/.bin/webpack-dev-server --inline --hot
```

Now your project is hosted on localhost:3001.

## Built With

* HTML5
* CSS
* JavaScript, ES6
* Bootstrap 3
* Webpack

## Author

* **Wojciech Komorowski** - [wojciechKomorowski](https://github.com/wojciechKomorowski)

## License

This project is licensed under the MIT [License](https://github.com/wojciechKomorowski/Face-Recognizer/blob/master/LICENSE.md).