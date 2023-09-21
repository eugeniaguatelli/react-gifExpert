import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 

    const title= 'Alf' ;
    const url= 'https://alf.com';

    test('should  match snapshot', () => {
        const {container}= render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    
     });

     test('should  show the image with the url and alt', () => {

        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('should  show the title', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     
     })


 })