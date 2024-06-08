import { describe, expect, it } from "vitest";
import { getCallResults } from "../components/ApiFetch";

describe("Test if API fetch is working", () => {
  it("tests if object is recieved", async () => {
    let x = getCallResults().length;

    expect(x).toEqual("20");
  });
});
