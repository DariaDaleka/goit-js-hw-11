export default function searchImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45132179-4e43907cb4a483db7f713893c';
  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      console.log(`Received response:`, response);
      if (!response.ok) {
        throw new Error(response.statusText || 'Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
      return data;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        position: 'topRight',
        message: `Error: ${error.message}`,
      });
    });
}
