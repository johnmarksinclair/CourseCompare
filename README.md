# Course Compare

## Overview

Course Compare is a web application that helps postgraduate students decide the right course for them by providing important information such as module breakdowns, cost information and user reviews. Our goal was to create the 'glassdoor' of college courses. It is built using ReactJS and Firebase and is currently hosted on vercel [here](https://course-compare.vercel.app[). The React frontend was primarily styled with bootstrap and semantic ui components and style classes.

All pages views are in the src/components folder. This is where you'll find the js files for all the pages throughout the web app such as the home page, search page and course information page. The application has no separate backend, all calls are made in the src/backendCalls folder.

## Software Start Guide

First download yarn from [here](https://classic.yarnpkg.com/en/docs/install)

First install dependancies by running `yarn install` in the project directory

`yarn start` will then run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Developer GitHub Cheatsheet

- inital copy of repo - `git clone <url>`
- update local copy of repo - `git pull origin <branchname> (normally master)`

- check current branch name - `git branch`
- create new branch - `git checkout -b "<branchname>"`

- stage changes - `git add .`
- commit changes - `git commit -m "<message>"`

- push changes - `git push origin <branchname>`

## Workflow

1. pick feature to implement (trello)
2. update your local git repo - git pull
3. create a new branch for your feature
4. implement the feature, remember to continuously pull the master branch to ensure yours is up to date
5. add, commit and push your changes to the feature's branch on github (your new branch)
6. open a pull request - someone else will review your code and merge it in
