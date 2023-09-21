import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    const category = 'One Punch';
    test('should de mostrar loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        screen.debug();
        expect(screen.getAllByText('Cargando...'));
        expect(screen.getAllByText(category));
     })
     test('should de mostrar items cuando se cargan los datos', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false

        })
        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    })
 })