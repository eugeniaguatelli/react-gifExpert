import {getGifs} from '../../src/helpers/getGifs'

describe('Pruebas en getGifs', () => { 
    test('should return gifs',async () => { 
        const gifs = await getGifs('One Punch');
        // console.log(gifs)

        // Me aseguro que devuelva un arreglo 
        expect(gifs.length).toBeGreaterThan(0);
        // Me aseguro que tenga estructura
        expect(gifs[0]).toEqual(
            {id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
            }
        )
     })
 })