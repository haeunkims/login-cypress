import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("renders learn react link", () => {
  mount(<App />);
  cy.get("a").contains("Learn React");
});

it("renders app and fetch elemnet using react-selector", () => {
  mount(<App />);
});
