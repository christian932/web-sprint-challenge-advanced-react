import React from "react";
import { render, screen } from "@testing-library/react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
	render(<CheckoutForm />);

	const checkoutForm = screen.getByTestId(/checkout form/i)

	expect(checkoutForm).toBeInTheDocument()
	expect(checkoutForm).toHaveTextContent()
	expect(checkoutForm).toBeTruthy()
});

test("shows success message on submit with form details", () => {

	render(<CheckoutForm />)

	const checkoutForm = screen.getByTestId(/checkout form/i)

	const firstname = screen.getByLabelText(/First Name:/i)
	const lastname = screen.getByLabelText(/Last Name:/i)
	const address = screen.getByLabelText(/Address:/i)
	const city = screen.getByLabelText(/City:/i)
	const state = screen.getByLabelText(/State/i)
	const zip = screen.getByLabelText(/Zip:/i)
	const checkout = screen.queryByRole('button')

	userEvent.type(firstname, 'Steve')
	userEvent.type(lastname, 'Rivera')
	userEvent.type(address, '1111 test address')
	userEvent.type(city, 'Dallas')
	userEvent.type(state, 'Texas')
	userEvent.type(zip, '75252')
	userEvent.click(checkout)

	const successMessage = screen.getAllByTestId("successMessage")

	expect(checkoutForm).toBeInTheDocument()
	expect(successMessage).toBeInTheDocument()
	expect(successMessage).toHaveTextContent()
});