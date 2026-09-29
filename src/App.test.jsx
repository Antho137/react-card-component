import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders header ", () => {
    render(<App />);
    expect(screen.getByText("Card Component")).toBeInTheDocument();
    expect(screen.getByText("Card Component")).toBeVisible();
  });

  it("renders card image", () => {
    render(<App />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  
  it("renders card image title", () => {
    render(<App />);
    expect(screen.getByText("Rainbow Salad")).toBeInTheDocument();
  });
  
  it("renders card image descriptionq", () => {
    render(<App />);
    const paraElement = screen.getByText(/Naturally vegan and gluten-free/i);
    expect(paraElement).toBeInTheDocument();
  });
});
