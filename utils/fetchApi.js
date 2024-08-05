import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-key': '233deac74cmsh22eb165b023352cp1c2e15jsn63ca19d0fb05',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}