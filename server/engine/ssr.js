import path from "path";
import fs from "fs";
import React from "react";
import Helmet from "react-helmet";
import { renderToString } from "react-dom/server";
import { Route, StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../../src/containers/index";
import { switchPath } from "../../src/rest";

// A simple helper function to prepare the HTML markup
const prepHTML = (data, { html, head, body }, preloadedState = {}) => {
  data = data.replace('<html lang="en">', `<html ${html}`);
  data = data.replace("</head>", `${head}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root"></div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(
      preloadedState
    ).replace(/</g, "\\\\\u003c")} </script>`
  );
  data = data.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return data;
};

export const getHTML = (htmlData, helmet, routeMarkup, reduxState) => {
  return prepHTML(htmlData, { html: helmet.htmlAttributes.toString(), head: helmet.title.toString() + helmet.meta.toString() + helmet.link.toString(), body: routeMarkup }, reduxState);
};

const createServerStore = (rootReducer, initialState) => {
  return createStore(rootReducer, initialState);
};


export const sendFileToHtml = ({
  rootReducer,
  filePathName,
  component,
  res,
  req
}) => {
  // "../../build/index.html"
  const filePath = path.resolve(__dirname, filePathName);

  fs.readFile(filePath, "utf8", (err, htmlData) => {
      //TODO manage error page
    // If there's an error... serve up something nasty
    if (err) {
      console.error("Read error", err);
      return res.status(404).end();
    }

    switchPath(req.path).then(reduxState => {
      console.log("someData INNNNN :: ", reduxState);
      console.log(" req.path :: ", req.path);

      // Create a store and sense of history based on the current path
      const store = createServerStore(rootReducer, reduxState);

      // Render App in React
      const routeMarkup = renderToString(<Provider store={store}>
          <StaticRouter location={req.path}>
            <Route component={component} />
          </StaticRouter>
        </Provider>);

      // Let Helmet know to insert the right tags
      const helmet = Helmet.renderStatic();

      // generate
      const html = getHTML(htmlData, helmet, routeMarkup, reduxState);
      // Send HTML Data with State
      // Todo i should probably add a option to disable sending State data with this responce
      res.send(html);
    });
  });
};