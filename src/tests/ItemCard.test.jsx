import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ItemCard } from "../components/ItemCard";

describe("Testing for ItemCard component redner", () => {
  it("renders the card", () => {
    const { container } = render(<ItemCard />);

    expect(container).toBeInTheDocument();
  });
});
