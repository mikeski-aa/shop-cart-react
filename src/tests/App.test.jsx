import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App.jsx";

describe("testing whether the thing works", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("expect false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App component", () => {
  it("rendering correct link text", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const links = screen.getByRole("heading");
    expect(links.textContent).toMatch("Homepage");
  });
});
