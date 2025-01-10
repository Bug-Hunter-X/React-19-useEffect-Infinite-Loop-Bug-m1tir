# React 19 useEffect Infinite Loop Bug

This repository demonstrates a common error in React 19 involving the `useEffect` hook, specifically an infinite loop caused by incorrect conditional logic within the dependency array. 

## Bug Description
The `MyComponent` uses `useEffect` to reset the counter when it exceeds 5. However, the provided logic continuously updates the state, causing an infinite loop. 

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite increment in the counter.

## Solution
The solution involves fixing the conditional logic within the `useEffect` hook to break the infinite loop. The solution implementation is presented in `bugSolution.js`.

## Technologies Used
- React 19
- JavaScript