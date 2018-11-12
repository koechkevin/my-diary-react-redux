# my-diary-react-redux
[![Build Status](https://travis-ci.org/koechkevin/my-diary-react-redux.svg?branch=develop)](https://travis-ci.org/koechkevin/my-diary-react-redux)
<br> 
my-diary-react-redux is ReactJs front end app for [diary](https://github.com/koechkevin/diary) API.
### Pre requisites.
    • EcmaScript 2015
    • WebPack version 4
    • Babel
    • React
    • React-router-dom
    • Jest
    • Enzyme
## Directory Structure.
This application makes use of ReactJs and redux micro-library. 
Components are put in a separate folder, action modules reside in their own folder so as reducers.
A folder to host the store has also been created. Containers have been put in their own directory. A folder named constants will have a file where all the constants required for this application declared
The __ __tests__ __folder will have all the tests for this application.

## Tasks
- #### Transpiling
        There are a number of ES2015-to-ES5 transpilers but have set Babel for this application. Babelrc file has been added to this repository in support of the same.
## Routing
• Routing for this application is achieved using [React-Router](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom).
## Pivotal Tracker stories
[Link](https://www.pivotaltracker.com/n/projects/2224580)

## Testing the application.
- clone the repository and change to the directory <br>
```git clone https://github.com/koechkevin/my-diary-react-redux.git```<br>
```cd my-diary-react-redux```<br>
- checkout to branch develop<br>
```git checkout develop```<br>
- install dependancies and run the application<br>
```yarn install```<br>
```yarn start```<br>
and navigate through the routes `/register`, `/login`, `/entries`
## Tests
- I have used jest and enzyme for unit testing of this application.
You will run 
```yarn test``` to run the tests of this application



