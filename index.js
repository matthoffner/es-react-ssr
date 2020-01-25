import express from "express";
import React from "react";
import { renderToNodeStream } from "./react-dom-server.js";

const { PORT = 3000 } = process.env;
const app = express();

app.use("/", (req, res) => {
    const component = React.createElement("h1", {}, "test");
    res.type('html');
    const rendered = renderToNodeStream(component);
    rendered.pipe(res);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
