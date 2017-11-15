# Twitterminal [![Build Status](https://travis-ci.org/ggsbv/twitterminal-codurance.svg?branch=master)](https://travis-ci.org/ggsbv/twitterminal-codurance)

Twitterminal is a Social Networking application that runs in the terminal. 


## Prerequisites

* [Node & npm](https://nodejs.org/en/) must be installed.
* Node version must be greater than v8.6.0
* Npm version must be greater than 5.5.1

## Installation

1. Fork the repository.
2. Clone the repository onto your machine.
3. Navigate to the project root directory.
4. Run ``` npm install ``` in the project root. This will install all dependencies that are included in the package.json
5. Run ``` npm run twitterminal``` to start Twitterminal.
6. Run ``` npm test ``` to run the tests and view coverage (Optional).

## Usage:

### Creating an account

To create an account, simply submit a command in the following format in the terminal when prompted:
```
<username> -> <text to post>
```

### Posting

The same format for creating an account is used in order to post. Therefore...
```
<username> -> <text to post>
```

... will work just fine!

### View a User's Timeline

To view any user's timeline, simply input the user's account name.
```
<username>
```

### Follow another User

To subscribe to, or follow, another user, simply input your own username followed by the word 'follows',
followed by the username of the User you want to follow. 
```
<username> follows <username>
```

### View a user's Wall

A User's wall is composed of his/her own posts, along with the posts of all the Users he/she follows.

To view a User's Wall, simply input a User's username, followed by the word 'wall'
```
<username> wall
```

## Future Plans

* Setup for certain tests need to be refactored to a Factory.
* Test for and handle edge cases.
* Typing can be improved once I have more experience with TypeScript.
* Create a composer class of sorts that sits above Twitterminal that will handle linking all of
Twitterminal's dependencies. (The Commands should not be hardcoded in the constructor, but rather
passed to Twitterminal after being composed.)
* Replace all string return statuses with Exceptions or customised status objects. I would like
to learn the correct way to structure such a flow. 
* Test coverage should be 100%. With more experience, I will be able to find ways to test certain
functions that I am currently struggling to figure out how to test.
* Improve the program based on feedback. 