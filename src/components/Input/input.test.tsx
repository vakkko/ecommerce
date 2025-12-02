import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";
import type { FieldValues, UseFormRegister } from "react-hook-form";

describe("Input", () => {
  const registerMock = vi.fn((name: string) => ({
    onChange: vi.fn().mockResolvedValue(undefined),
    onBlur: vi.fn().mockResolvedValue(undefined),
    ref: vi.fn(),
    name,
  })) as unknown as UseFormRegister<FieldValues>;

  const inputProps = {
    label: "username",
    placeholder: "UserName",
    register: registerMock,
    errors: undefined,
    icon: false,
  };

  it("Label hides when input is clicked", () => {
    render(<Input {...inputProps} />);

    const label = screen.getByText("UserName");

    expect(label).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    fireEvent.click(input);

    expect(screen.queryByText("Username")).not.toBeInTheDocument();
  });

  it("Label hides and input gets focus when label is clicked", () => {
    render(<Input {...inputProps} />);

    const label = screen.getByText("UserName");
    fireEvent.click(label);

    expect(screen.queryByText("UserName")).not.toBeInTheDocument();

    const input = screen.getByRole("textbox");
    expect(input).toHaveFocus();
  });

  it("eye icon doesn't render when icon is false", () => {
    render(<Input {...inputProps} />);

    const eyeIcon = screen.queryByRole("img");
    expect(eyeIcon).not.toBeInTheDocument();
  });

  it("Eye icon toggles password visibility", () => {
    render(<Input {...inputProps} icon={true} />);

    const eyeIcon = screen.getByRole("img");
    const input = screen.getByTestId("input");

    expect(eyeIcon).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(eyeIcon);

    expect(input).toHaveAttribute("type", "text");
  });

  it("No error message renders when errors[label] is undefined", () => {
    render(<Input {...inputProps} />);

    const errorMessage = screen.queryByRole("paragraph");

    expect(errorMessage).not.toBeInTheDocument();
  });

  it("Error message renders when errors[label] exists", () => {
    const errorMessage = {
      username: { message: "Required", type: "required" },
    };
    render(<Input {...inputProps} errors={errorMessage} />);

    expect(screen.getByText("Required")).toBeInTheDocument();
  });
});
