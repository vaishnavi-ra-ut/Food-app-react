import { render , screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appstore from "../../utils/appStore"
import "@testing-library/jest-dom"

it("should render the header component" ,()=> {
    render(<BrowserRouter>
                <Provider store={appstore}>
                    <Header/>
                </Provider>
           </BrowserRouter>);

    const loginButton= screen.getByRole("button", {name : "Login"});

    expect(loginButton).toBeInTheDocument();
});