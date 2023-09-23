import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetailView from "./UserDetailView";

jest.mock("./hooks/useFetchUserDetails", () => ({
  useFetchUserDetails: () => ({
    data: {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    isLoading: false,
    isError: false,
  }),
}));

describe("PostGridView", () => {
  it("renders posts correctly", () => {
    render(<UserDetailView userId={1} />);

    expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(screen.getByText("Username: Bret")).toBeInTheDocument();
    expect(screen.getByText("Email: Sincere@april.biz")).toBeInTheDocument();
    expect(
      screen.getByText("Phone: 1-770-736-8031 x56442")
    ).toBeInTheDocument();
    expect(screen.getByText("Website: hildegard.org")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Address: Kulas Light, Apt. 556, Gwenborough, 92998-3874"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Company: Romaguera-Crona")).toBeInTheDocument();
  });
});
