import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Input from "./Input";
import type { FieldValues, UseFormRegister } from "react-hook-form";

describe("Input", () => {
  const registerMock = vi.fn((name: string) => ({
    onChange: vi.fn().mockResolvedValue(undefined),
    onBlur: vi.fn().mockResolvedValue(undefined),
    ref: vi.fn(),
    name,
    value: watchMock(name),
  })) as unknown as UseFormRegister<FieldValues>;

  const watchMock = vi.fn().mockReturnValue("");

  const inputProps = {
    label: "username",
    placeholder: "UserName",
    register: registerMock,
    errors: undefined,
    icon: false,
    watch: watchMock,
  };

  beforeEach(() => {
    watchMock.mockReset();
  });

  it("Show input value when it's defined and hide label", () => {
    watchMock.mockReturnValue("something");

    render(<Input {...inputProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("something");
    expect(screen.queryByText("Username")).not.toBeInTheDocument();
  });

  it("Input gets focus when label is clicked", () => {
    render(<Input {...inputProps} />);

    const label = screen.getByText("UserName");
    const input = screen.getByRole("textbox");

    fireEvent.click(label);
    expect(input).toHaveFocus();
  });

  it("Eye icon doesn't render when icon is false", () => {
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
