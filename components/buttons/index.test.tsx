import {screen, render} from "@testing-library/react",
import "@testing-library/jest-dom"
import Button from "./index"


test('renders button', ()=>{
    render(<Button/>);
    const buttonEL = screen.getByRole('button')
    expect(buttonEL).toBeInTheDocument()
})