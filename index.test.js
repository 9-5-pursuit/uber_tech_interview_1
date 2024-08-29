const mostCommonCharacter = require("./index");

describe("mostCommonCharacter", () => {
  test("finds the most common character from an array of strings", () => {
    const inputArray = ["hello", "world", "hello"];
    expect(mostCommonCharacter(inputArray)).toBe("l");
  });

  test("handles array with one string", () => {
    const inputArray = ["hello"];
    expect(mostCommonCharacter(inputArray)).toBe("l");
  });

  test("handles array with multiple strings having all unique characters", () => {
    const inputArray = ["abc", "def", "ghi"];
    expect(mostCommonCharacter(inputArray)).toBe("a");
  });

  test("handles array with same character in all strings", () => {
    const inputArray = ["aaa", "aaa", "aaa"];
    expect(mostCommonCharacter(inputArray)).toBe("a");
  });

  test("returns correct result for array with mixed characters", () => {
    const inputArray = ["abc", "bca", "cab"];
    expect(mostCommonCharacter(inputArray)).toBe("a");
  });

  test("handles empty strings in the array", () => {
    const inputArray = ["", "hello", ""];
    expect(mostCommonCharacter(inputArray)).toBe("l");
  });

  test("returns message for an array of empty strings", () => {
    const inputArray = ["", "", ""];
    expect(mostCommonCharacter(inputArray)).toBe("No common character found.");
  });

  test("handles array with numbers and special characters", () => {
    const inputArray = ["123", "321", "231"];
    expect(mostCommonCharacter(inputArray)).toBe("1");
  });

  test("handles input that is an object", () => {
    const input = { key1: "value1", key2: "value2" };
    expect(mostCommonCharacter(input)).toBe(
      "Invalid input: Input must be an array of strings."
    );
  });

  test("handles input that is a number", () => {
    const input = 12345;
    expect(mostCommonCharacter(input)).toBe(
      "Invalid input: Input must be an array of strings."
    );
  });

  test("handles input that is a single string", () => {
    const input = "hello world";
    expect(mostCommonCharacter(input)).toBe(
      "Invalid input: Input must be an array of strings."
    );
  });

  test("handles empty array", () => {
    const input = [];
    expect(mostCommonCharacter(input)).toBe("No common character found.");
  });

  test("handles array with null or undefined elements", () => {
    const input = ["hello", null, undefined, "world"];
    expect(mostCommonCharacter(input)).toBe("l");
  });

  test("handles array with special characters and numbers", () => {
    const input = ["123@!", "!@#123", "456@!"];
    expect(mostCommonCharacter(input)).toBe("1");
  });
});
