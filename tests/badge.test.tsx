import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../components/design-system/Badge";

describe("Badge Component", () => {
  it("renders with default props", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-[var(--primary)]");
  });

  it("renders with cyan variant", () => {
    render(<Badge variant="cyan">Cyan Badge</Badge>);
    const badge = screen.getByText("Cyan Badge");
    expect(badge).toHaveClass("text-[var(--accent-cyan)]");
  });

  it("applies custom class names", () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badge = screen.getByText("Custom Badge");
    expect(badge).toHaveClass("custom-class");
  });
});
