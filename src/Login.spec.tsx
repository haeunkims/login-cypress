import React from "react";
import { mount } from "@cypress/react";
import Login from "./Login";

it("Username in Login", () => {
  mount(<Login />);
  cy.get('input[name="user"]');
});

it("typing for user", () => {
  mount(<Login />);
  cy.get('input[name="user"]').type("ray");
});

it("Password in Login", () => {
  mount(<Login />);
  cy.get('input[name="password"]');
});

it("typing for Password", () => {
  mount(<Login />);
  cy.get('input[name="password"]').type("010haeun");
});

it("success login", () => {});
it("wrong username or password", () => {});
