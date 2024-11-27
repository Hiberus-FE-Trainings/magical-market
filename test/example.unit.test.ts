import { describe, expect, it } from "vitest";

const helloWorld = () => "Hello World!";

describe("Hello World unit test", () => {
  it("should return hello world", () => {
    expect(helloWorld()).toEqual("Hello World!");
  });
});
