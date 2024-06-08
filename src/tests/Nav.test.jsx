import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Nav } from "../components/Nav";

describe("testing navigation bar", () => {
  it("check snapshot render", () => {
    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
