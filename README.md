# Twitterminal

Twitterminal is a Social Networking application that runs in the terminal. 


## Prerequisites

* [Node & npm](https://nodejs.org/en/) must be installed.

## Installation

1. Fork the repository.
2. Clone the repository onto your machine.
3. Navigate to the project root directory.
4. Run ``` npm install ``` in the project root. This will install all dependencies that are included in the package.json
5. WORK IN PROGRESS

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

* Setup for certain tests need to be refactored to a Factory function of sorts.
* Test for and handle edge cases.
* Create a composer class of sorts that sits above Twitterminal that will handle linking all of
Twitterminal's dependencies.
* Continuously improve the program based on user feedback.