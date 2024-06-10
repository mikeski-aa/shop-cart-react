import { renderHelper, filterItems } from "../components/RenderAllItems";
import { describe, it, expect, expectTypeOf } from "vitest";

describe("Test filtered items is giving a filtered array back", () => {
  it("returns filtered array", () => {
    const context = {
      items: [
        { id: 1, category: "test" },
        { id: 2, category: "another" },
      ],
    };

    const target = "test";

    expectTypeOf(filterItems(context, target)).toMatchTypeOf(Array);
    expect(filterItems(context, target)[0].id).toBe(1);
  });
});
