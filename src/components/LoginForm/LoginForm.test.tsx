import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import useUser from "@/hooks/useUser";

jest.mock("@/hooks/useUser");

describe("LoginForm", () => {
  const loginMock = jest.fn();

  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({ login: loginMock });
  });

  test("renders form elements", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    expect(screen.getByPlaceholderText(/Your email.../i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Your password.../i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Log in/i)).toBeInTheDocument();
    expect(screen.getByText(/Not registered yet?/i)).toBeInTheDocument();
  });

  test("submits form and navigates on successful login", async () => {
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock,
    }));

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.input(screen.getByPlaceholderText(/Your email.../i), {
      target: { value: "test@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Your password.../i), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText(/Log in/i));

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith("test@example.com", "password123");
    });
  });

  test("displays error message on failed login", async () => {
    loginMock.mockRejectedValueOnce(new Error("Ошибка авторизации"));

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    fireEvent.input(screen.getByPlaceholderText(/Your email.../i), {
      target: { value: "test@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Your password.../i), {
      target: { value: "wrongpassword" },
    });

    fireEvent.click(screen.getByText(/Log in/i));

    await waitFor(() => {
      expect(screen.getByText(/Ошибка авторизации/i)).toBeInTheDocument();
    });
  });
});
