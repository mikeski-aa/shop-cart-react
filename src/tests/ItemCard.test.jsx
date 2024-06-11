import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ItemCard, checkIfItemExists } from "../components/ItemCard";
import userEvent from "@testing-library/user-event";

describe("Testing for ItemCard component redner", () => {
  it("renders the card", () => {
    const { container } = render(<ItemCard />);

    expect(container).toBeInTheDocument();
  });
});

describe("Checking if item exists in given array", () => {
  it("item exists in array", () => {
    const itemId = 1;
    const array = [
      { id: 1, name: "first item" },
      { id: 2, name: "second item" },
    ];

    expect(checkIfItemExists(itemId, array)).toBeTruthy();
    expect(checkIfItemExists(5, array)).toBeFalsy();
  });
});
