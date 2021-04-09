import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    
    render(<CheckoutForm/>);
    
    const header = screen.getByText(/checkout form/i);
    
    expect(header).toBeTruthy();
    expect(header).toBeInTheDocument();

});
 

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const btn = screen.getByRole(/button/i);

    userEvent.type(firstName, 'Iron');
    userEvent.type(lastName, 'Man');
    userEvent.type(addressInput, 'Avengers Tower');
    userEvent.type(cityInput, 'New York City');
    userEvent.type(stateInput, 'New York');
    userEvent.type(zipInput, '11101');
    userEvent.click(btn);

    const successMessage = await screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
   

});
