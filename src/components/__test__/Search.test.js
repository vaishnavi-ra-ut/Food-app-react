import Body from "../Body"
import { render, screen } from "@testing-library/react"
import Mocks from "../mocks/fetchData.json"
import { BrowserRouter } from "react-router-dom"
import { act } from "react"
import "@testing-library/jest-dom"

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(Mocks)
        }
    })
})
it("should render the Body Component with search feature" ,async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    });

    const SearchBTN = screen.getByRole("button", {name : "Search"});
    const searchInput = screen.getByPlaceholderText("Search");
    // fireEvent
    expect(SearchBTN).toBeInTheDocument();

});