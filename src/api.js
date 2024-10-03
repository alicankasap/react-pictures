import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 5xU8X-bt1gAoZ4IsYm_kocsuo_s0F8SEMLxrRvCQV40'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;