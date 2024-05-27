import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ButtonBase from "./ButtonBase";

describe("ButtonBase", () => {
  it("renders the ButtonBase component", () => {
    render(<ButtonBase>Hello</ButtonBase>);
    expect(screen.findAllByText("Hello")).toBeTruthy();
  });
});
