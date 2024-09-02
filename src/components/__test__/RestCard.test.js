import { render, screen } from "@testing-library/react";
import { Restaurant } from "../Body"
import Mocks from "../../components/mocks/resData.json"
import "@testing-library/jest-dom"

it("should render Restaurant cards with mock data" , ()=>{

    render(
        <Restaurant resData={Mocks}/>
    );
    const name= screen.getByText("Brijwasi Pure Veg");
    
    expect(name).toBeInTheDocument();
})