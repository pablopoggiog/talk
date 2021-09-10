import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "..";

const mockedLoginWithGoogle = jest.fn();

jest.mock("src/hooks/", () => ({
  useFirebase: () => ({
    loginWithGoogle: mockedLoginWithGoogle,
  }),
}));

describe("Login", () => {
  it("calls loginWithGoogle when the Login with Google button is clicked", () => {
    render(<Login />);

    const loginWithGoogleButton = screen.getByText(/Login with Google/);

    userEvent.click(loginWithGoogleButton);

    expect(mockedLoginWithGoogle).toHaveBeenCalledTimes(1);
  });
});
