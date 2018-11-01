# Tic Tac Toe Application

## Created Without Create React App

I created this application so that I could update my React Workflow incorporating the latest changes in webpack and React. However, two plugins I was using in my previous workflow have vulnerabilities which I cannot resolve at this time. They are:

image-webpack-loader
imagemin-webpack-plugin

The html-webpack-plugin does not work well at this point in time with webpack 4 > version 3.7.0. I might revert to it and see what happens. The html does not update changes in development or production.

The extract-text-webpack-plugin does not play well with webpack 4. Word is to replace it with the mini-css-extract-plugin instead.

I am looking further into the packages containing the vulnerabilities, including the webpack docs. No answers in the plugin repos themselves. Perhaps webpack has some alternatives.

This particular app does not require the importing/use of images, so I have removed anything having to do with use of images. As a result, there are now no vulnerabilities. I ran an npm audit and was also notified as such when I removed said npm packages.

When I create an app that does require the use of images, I will come up with alternative solutions to make things work!

Repository related to previous React Workflow: https://github.com/interglobalmedia/react-workflow-presentation

Repository using previous workflow: https://github.com/interglobalmedia/portfolio





