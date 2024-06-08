import express from "express";
import fs from "fs";
import path from "path";
import findFreePorts from "find-free-ports";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

async function getPort() {
  const FREEPORT = await findFreePorts(1);

  const app = express();

  app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Some error happened");
      }
      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
        )
      );
    });
  });

  app.use(express.static(path.resolve(__dirname, "..", "build")));

  app.listen(FREEPORT[0], () => {
    console.log(`App launched on ${FREEPORT[0]}`);
  });
}

getPort();
