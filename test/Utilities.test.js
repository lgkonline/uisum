import Utilities from "../src/Utilities";

test("guid() to return a string", () => {
    expect(Utilities.guid()).not.toBe("");
});