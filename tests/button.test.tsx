import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../components/design-system/Button";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[var(--primary)]");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies glass variant", () => {
    render(<Button variant="glass">Glass Button</Button>);
    const button = screen.getByRole("button", { name: "Glass Button" });
    expect(button).toHaveClass("bg-white/5");
  });
});
