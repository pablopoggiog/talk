import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Logout } from "..";

const mockedLogout = jest.fn();

jest.mock("src/hooks/", () => ({
  useFirebase: () => ({
    auth: { currentUser: "1" },
    logout: mockedLogout,
  }),
}));

describe("Logout", () => {
  it("calls logout when the Login with Google button is clicked", () => {
    render(<Logout />);

    const logoutButton = screen.getByText(/Log Out/);

    userEvent.click(logoutButton);

    expect(mockedLogout).toHaveBeenCalledTimes(1);
  });
});
