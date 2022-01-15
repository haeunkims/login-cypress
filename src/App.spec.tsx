import React from "react";
import { mount } from "@cypress/react";
import App from "./App";

it("App has Login", () => {
  mount(<App />);
  cy.get("div.App").children().should("have.class", "login__container");
});

it("renders app and fetch elemnet using react-selector", () => {
  mount(<App />);
});
