Development manual
========
This manual will show you how to set up the game on a fresh machine.

## Conditions
The following packages are needed for building

Build tools and scripts
* Node.js
* NPM version 6.4.1

Web request management
* Express

Packaging tools
* Webpack
* * Webpack-CLI
* * html-webpack-plugin
* * clean-webpack-plugin
* * webpack-devserver
* CSS-loader
* style-loader

Testing
* Jest

Continuous pipeline
* GitHub
* CircleCI
* Heroku

## Installation
1. Clone this repo `https://github.com/DVASM/TicTacToe-HUG.git`  
2. Go to the project directory and run the following command `npm install`
3. Install all the dependencies
4. Install Heroku

## Building
Run the following commands on your console window
1. npm run build
2. npm run start

## Testing
For testing, connect your cirlceCI account to your repo and run the tests.  
The tests are made via the Jest testing framework.  
The tests can also be made through your console window using npm run test.

## Deployment
The webapp is automatically deployed to an external server on Heroku as long  
as it passes all tests on circleCI.
[TicTacToe][heroku].

  [heroku]: https://motherfuckingwebsite.com/
