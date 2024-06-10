import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ItemCard } from "../components/ItemCard";
import userEvent from "@testing-library/user-event";

describe("Testing for ItemCard component redner", () => {
  it("renders the card", () => {
    const { container } = render(<ItemCard />);

    expect(container).toBeInTheDocument();
  });
});
