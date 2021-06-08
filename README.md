# Streem Web Code Challenge

Welcome to Streem's Web Code challenge. This challenge will have you determining the dimensions of items in a grid dynamically so they are laid out nicely in their parent container. We have made a React application for you to start with so you can focus on the sizing and layout specifics.

## Before you begin...

Please read through this README carefully. If you have any questions, please ask. Lastly, **the point of this challenge is to do it, not necessarily to finish it**. If you finish it, that's awesome! If you don't, take notes because we want to hear about your challenges and your thought process while working through it.

## Challenge 

We want to display `n` divs in a grid such that the grid reorganizes itself and resizes items into the *best* number of columns and rows. When working, it should look and act similar to this:

![code_challenge_visual_ac](https://user-images.githubusercontent.com/394949/121239487-280ee080-c84e-11eb-9be1-21398a79d4ab.gif)

**🔗 [High quality MOV](https://drive.google.com/file/d/1MltinLjiA3ga7hQZTUmaDCFRZsGrZjYb/view?usp=sharing)**

### Requirements

* The grid can accommodate `n` items.
* Each grid item must maintain a 16/9 aspect ratio.
* The grid should reorganize and resize items into the *best* amount of columns and rows. *Best* is defined as the largest possible item is displayed and each item is the same size.
* The only code you should modify is the [`getGridItemDimensions` function in the file `Result.tsx`](https://github.com/streem/web-code-challenge/blob/master/src/components/Result.tsx#L125-L146). This function must return the `Dimensions` for a grid item.

While creating your solution, please follow these rules: 

* No new dependencies please. 
* Try to limit yourself to 3 hours maximum for working on it.  This limit is for your schedule’s benefit. Again: if you complete the challenge, that’s good. If you don’t, that’s ok, too!
* You have 1 week to work on the challenge. We understand you may have work, family, or other commitments and want to give you plenty of space to do the challenge alongside those.

## Instructions
Please follow the instructions below to complete this code challenge: 

1. Clone this repo.
2. Create a new branch from `master` for your work.
3. Push your work to a **private repository** on your GitHub account. 
4. Invite **@nonsie**, **@Fallenstedt**  **@toddlemoine** and **@rbouissey** as collaborators. [Use these instructions from GitHub incase you get stuck](https://docs.github.com/en/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
5. Let us know! Tell your contact that you have completed the code challenge.

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

