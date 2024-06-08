import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch("Vite + React");
  });

  it("renders", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
