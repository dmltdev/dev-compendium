import Stack from "./Stack";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("Should push and pop elements", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);

    stack.push(3);
    expect(stack.peek()).toBe(3);

    stack.pop();
    expect(stack.peek()).toBe(2);

    stack.pop();
    expect(stack.peek()).toBe(1);

    stack.pop();
    expect(stack.peek()).toBe(undefined);
  });

  it("Should correctly calculate the lengh of the stack", () => {
    expect(stack.length).toBe(0);

    stack.push(1);
    expect(stack.length).toBe(1);

    stack.push(2);
    expect(stack.length).toBe(2);
  })

  it("isEmpty returns a correct boolean value", () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  })
});
