import { FunctionComponent } from "react";
import { render } from "@testing-library/react";
import { UseDateReturn } from "src/types";
import { useDate } from "..";

const renderHook = (createdAt: Record<string, number>) => {
  const returnValue: UseDateReturn = { timeAgo: "" };
  const TestComponent: FunctionComponent = () => {
    Object.assign(returnValue, useDate(createdAt));
    return null;
  };

  render(<TestComponent />);

  return returnValue;
};

describe("useDate", () => {
  // mocks Date.now
  const realDate = Date;

  beforeAll(() => {
    const timeNow = Date.now();
    const _GLOBAL: any = global;

    _GLOBAL.Date = class {
      public static now() {
        return timeNow;
      }

      constructor() {
        return timeNow;
      }

      public valueOf() {
        return timeNow;
      }
    };
  });

  afterAll(() => {
    global.Date = realDate;
  });

  it("returns the appropiate timeAgo value for a specific input", () => {
    const { timeAgo } = renderHook({
      seconds: 1612051770,
      nanoseconds: 543000000,
    });

    const expectedTimeAgo = "este minuto";

    expect(timeAgo).toEqual(expectedTimeAgo);
  });
});
