import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Nav } from "../components/Nav";

describe("testing navigation bar", () => {
  it("to be in the document", () => {
    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
