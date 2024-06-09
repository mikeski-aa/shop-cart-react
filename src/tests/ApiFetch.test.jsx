import { describe, expect, it, vi } from "vitest";
import { getCallResults, callShopApi } from "../components/ApiFetch";

describe("callShopAPI fetches product data", () => {
  it("checks if API returns array after returning promise", async () => {
    const result = await callShopApi();

    expect(result).toBeInstanceOf(Array);
  });
});
