import { describe, expect, it } from "vitest";
import { CartItem } from "../components/CartItem";
import { render } from "@testing-library/react";

describe("Test cart item render correctly", () => {
  it("Check render shows", () => {
    const { container } = render(<CartItem />);

    expect(container).toBeInTheDocument();
  });
});
