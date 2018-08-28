import Utilities from "../src/Utilities";

test("guid() to return a string", () => {
    const result = Utilities.guid();

    expect(result).not.toBe("");
    expect(typeof result).toBe("string");
});

test("addClass() to add a class name", () => {
    document.body.innerHTML = `<div id="test"></div>`;

    const testingElement = document.getElementById("test");

    Utilities.addClass(testingElement, "test-class");

    expect(Utilities.hasClass(testingElement, "test-class")).toBe(true);
});

test("removeClass() to remove a class name", () => {
    document.body.innerHTML = `<div id="test" class="test-class"></div>`;

    const testingElement = document.getElementById("test");

    Utilities.removeClass(testingElement, "test-class");

    expect(Utilities.hasClass(testingElement, "test-class")).toBe(false);
});

test("toggleClass() to add class name when element not already has class name", () => {
    document.body.innerHTML = `<div id="test"></div>`;

    const testingElement = document.getElementById("test");

    Utilities.toggleClass(testingElement, "test-class");

    expect(Utilities.hasClass(testingElement, "test-class")).toBe(true);
});

test("toggleClass() to remove class name when element already has class name", () => {
    document.body.innerHTML = `<div id="test" class="test-class"></div>`;

    const testingElement = document.getElementById("test");

    Utilities.toggleClass(testingElement, "test-class");

    expect(Utilities.hasClass(testingElement, "test-class")).toBe(false);
});