# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

* start server with `npm start`.
* this app requires an external api to function properly, therefore remember to download that so information is saved.
* tests can be accessed and ran using `npm test`.
* cypress E2E tests can also be accessed by having the webpack server running, the test api database server running as well as calling `npm run cypress`.

## Features

This application builds the framework for a interview scheduler for one week, that can be scaled up to multiple weeks or months in the future. It allows users to pick a date, time and specific interviewer that they wish. The app also allows then to cancel the interview, or edit it if they made a mistake when scheduling. The list of days also portrays the spots available on each day of the week, so the user doesn't have to go searching for availabilities. 

Please see below for screenshots;


!["Main page with interviews scheduled"](https://github.com/nickidells97/scheduler/blob/master/docs/main-page.png?raw=true)

!["Creating new interview"](https://github.com/nickidells97/scheduler/blob/master/docs/new-interview.png?raw=true)

!["Deleting, Editing and Confirmation functionality when accessing appointments"](https://github.com/nickidells97/scheduler/blob/master/docs/deleting-editing-confirming.png?raw=true)

