import React from "react";
import { Counter } from "./Counter";
import { screen, render, fireEvent } from "@testing-library/react";
import { perf, wait, RenderCountField } from "react-performance-testing";

describe("Counter", () => {
  describe("render time", () => {
    test("should render time be less than 16ms", async () => {
			const Component = () => {
				return <Counter />;
			};

			const { renderCount } = perf(React);

			render(<Component />);

			fireEvent.click(screen.getByText("Increment"));

			console.log(renderCount.current)

			await wait(() => expect((renderCount.current.Counter as RenderCountField).value).toBe(2));
    });
  });
});
