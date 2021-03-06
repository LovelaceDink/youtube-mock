# A YouTube video search bar that produces:

10 youtube videos based on user input.  
When clicked, a video becomes a VideoDetail component, larger and playable

# Of Note, in this app:

good, solid utilization of the MVC architecture.  
creating a seperate file for the API implementation, and then importing that implementation when needed, making for DRYer code.  
I tried to put in as many examples of deconstructing props as I could, to show how best to only use what is needed. And, as an alternative to deeply nested dot notation, creating variables that can then be reused.

# Please feel free to contribute

I love collaboration. Feel Free. Make a PR!!

# For a look at the app that I've been working on so far, head to:

[netlify](https://sad-spence-28b1d3.netlify.app)
[vercel](https://youtube-mock-three.vercel.app)

# This project was all about the React, using AXIOS and the YouTube API

I bootstrapped this project with [Create React App](https://github.com/facebook/create-react-app).  
Focusing more on the React here, and less on package management.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
