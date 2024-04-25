const API_KEY = "ivByw3V0QH0LxhxEvw5sqd3CsiiDY5oKXx3P8jv7DwHBpSuCEc4zi7nR";

async function getPhotos() {
  const url = `https://api.pexels.com/v1/popular?per_page=10&page=1`;
  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const data = await response.json();

  return data.photos;
}

async function searchPhotos(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=10&page=1`;
  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const data = await response.json();
  return data.photos;
}

export { getPhotos, searchPhotos };
