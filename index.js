import express from "express";
const { PORT = 3000 } = process.env;
import React from "react";
import ReactDomServer from "./react-dom-server.js";

const app = express();

app.use("/", (req, res) => {
    const component = React.createElement("h1", {}, "test");
    res.type('html');
    const rendered = ReactDomServer.renderToNodeStream(component);
    rendered.pipe(res);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
