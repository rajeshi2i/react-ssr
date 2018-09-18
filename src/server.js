import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import Helmet from "react-helmet";
import routes from "./routes";
import App from "./components/App";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
  const context = { };
  const dataRequirements =
    routes
      .filter( route => matchPath( req.url, route ) )
      .map( route => route.component )

  Promise.all( dataRequirements ).then( ( ) => {
    const jsx = (
      <StaticRouter context={ context } location={ req.url }>
        <App />
      </StaticRouter>
    );
    const reactDom = renderToString( jsx );
    const helmetData = Helmet.renderStatic( );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom, helmetData ) );
  });
});

app.listen(3000);

function htmlTemplate( reactDom, helmetData ) {
  return (`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8"></meta>
      ${ helmetData.title.toString( ) }
      ${ helmetData.meta.toString( ) }
      <title>React SSR</title>
    </head>
    <body>
      <div id="app">${ reactDom }</div>
      <script src="./app.bundle.js"></script>
    </body>
    </html>
  `);
}
