#### create React App from scratch First step

$ npm init

#### then  need to install some packages

$ npm i react
$ npm i react-dom
$ npm i react-scripts
$ npm i node-sass --save



return and render are different - render is a method of react and  return is just pure javascript for returning output, so with Render is that what exactly you want to trigger multiple times. and with Return is that which u want to display, nothing complicated actually 

Render is that what exactly you want to trigger multiple times.

Return is that which u want to Display.

For example.

render(){

let cardDisplay=some random text which u want to trigger multiple times. (Example, Displaying the names of employees in a company)}

return

( {cardDisplay} )

Explanation: You want to Display the list of employees in a company.so return the variable which you want to trigger(repeat)multiple times. Inside Render write what your logic for what to repeat.

Render is a method that tell react what to display.

Return is a method / give output of function

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

 the only way to update the UI is to create a new element, and pass it to ReactDOM.render()

 Build and Run react App - commands
1. go inside folder with the following command: 
  
 cd my-react-app

2. npm run build

This would build our application for production to the build directory. The "build" folder would contain all the static files which can be directly used on any web server. Also, the build command transpiles our source code into code which the browser can understand. It uses Babel for this and files are optimized for best performance. All of our JS files are bundled into a single minified file and even HTML/CSS code is minified to significantly reduce the download times on the client's browser.

3. npm start

This would run our application in development mode. We can just navigate to http:localhost:3000 in any browser

Internally, npm start uses webpack dev server to start a dev server so that we can communicate with the same.

4. npm test

This command would run the tests in an interactive manner. The default configuration is to run tests which are related to the files updated since the last commit.

Eject
When a new app is created using the create-react-app, all of our build settings are actually preconfigured by the tool. Thus, we cannot make any updates to the build setup, e.g. we do not get access to webpack.config file. It is actually managed by the "react-scripts" build dependency. But there is a way by which we can customize the setup and not get restricted by the configuration provided by Create React App. To do that, we can just execute the command:

npm run eject

Ejecting will give us complete control over the config files as well as dependencies like Webpack/Babel/ESLint. Ejecting actually forks the Create React app config and moves that into our app. After running the eject command, we can see a 'config' folder created in our project which has files like webpack.config for Development and Production plus a webpackDevServer.config file. Also, we can see that in package.json, the single build dependency react-scripts is removed from our tutorial project and all the individual dependencies are listed.

Unit Testing
Jest is the default testing framework which is automatically configured when we use the Create React App. Jest can be used for writing unit tests for our individual components to verify that they behave as expected.

If we follow standard file naming convention like .spec.js or .test.js OR if all our test files are placed inside the tests folder, Jest will detect them and run our tests. Example: Inside the src directory of our React tutorial project, we can see the file App.test.js. It is a basic unit test setup by Create React App to test our App component.

Running "npm test" will launch our test runner in watch mode. Thus, every time we make updates to any test file, it would re-run our tests. This is exactly the same behavior as npm start, which recompiles our source code when any of our source files are updated.

Calling Shell and Node Scripts

#!/usr/bin/env bash


#### Can I use state in every component?
about state is where exactly we can use it. In the early days, state could only be used in class components, not in functional components.

That’s why functional components were also known as stateless components. However, after the introduction of React Hooks, state can now be used both in class and functional components.

#### What are the differences between props and state?

Components receive data from outside with props, whereas they can create and manage their own data with state
Props are used to pass data, whereas state is for managing data
Data from props is read-only, and cannot be modified by a component that is receiving it from outside
State data can be modified by its own component, but is private (cannot be accessed from outside)
Props can only be passed from parent component to child (unidirectional flow)
Modifying state should happen with the setState ( ) method


