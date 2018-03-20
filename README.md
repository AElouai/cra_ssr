# cra_ssr Create React App with Server Side Rendering
create-react-app with Advanced server side rendering without ejecting  `npm run eject`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of create-react-app  guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) where you can find some information on how to perform common tasks.<br>

## Routing
we will be using [React Router V4](https://github.com/ReactTraining/react-router) .

## Store 
we will be using [Redux](https://redux.js.org/) for managing Store , if you want to use [Mobx]() you will have to update the config a little bit

for debugging redux install [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension).

## Server
we will be using [Express]() you are free to use any other Node js server like [KOA]()
or even `Go` or another language you just need to change the config ;) 

**we will be using the server mainly for rendering React to Html if you are not requesting data
 from server asynchronously you can skip the endpoint **setSetate****


## Test
we will be using [Jest]() 


## `Start Project`

because the subject of this repository is to add SSR on top of create-react-app you 
can still benefit from all CRA functionality 

    yarn start / build / test / eject

the SSR functionaly are ensure throught [ExpressJS]()
