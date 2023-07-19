export const dataURL = 'https://dummyjson.com/posts';

export const fetchData = async (url: string, options: object = {}) => {

    const response = await fetch(url, options)
    if(!response.ok) {
        return;
    }
    const data = await response.json()
        
    return data;  
}