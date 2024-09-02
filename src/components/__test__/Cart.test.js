import { act } from "react"
import Menu from "../../components/Menu"
import Mock from "../../components/mocks/menu.json"
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{Promise.reslove(Mock)}
    })
});

it("should load rest menu component", async()=>{
    
    await act(async()=>{
        render(<Provider store={appStore}>
            <Menu/>
        </Provider>);
    })

    const CategoryHeading = screen.getByText("Loading...");

})