import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getCallResults, callShopApi } from "../components/ApiFetch";

describe("callShopAPI fetches product data", () => {
  it("call fetch api and mock", async () => {
    const mockFetch = vi.spyOn(global, "fetch");

    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve([
          { id: 1, title: "product 1" },
          { id: 2, title: "product 2" },
        ]),
    };

    mockFetch.mockResolvedValue(mockResponse);

    const products = await callShopApi();

    expect(mockFetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
    expect(products).toEqual([
      { id: 1, title: "product 1" },
      { id: 2, title: "product 2" },
    ]);

    mockFetch.mockRestore();
  });

  // this is incorrect as it calls the API directly
  it("checks if API returns array after resolving promise", async () => {
    const result = await callShopApi();

    expect(result).toBeInstanceOf(Array);
  });
});
