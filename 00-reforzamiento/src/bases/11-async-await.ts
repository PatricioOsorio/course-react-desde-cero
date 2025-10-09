import type { GiphyRandomResponse } from '../models/giphy.interface';

const API_KEY = 'vfEjmi6MjznQJlVN55t3vq3ypbsHZY8w';

const appendImageDom = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async () => {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const json: GiphyRandomResponse = await res.json();

    const imageUrl = json.data.images.original.url;
    return imageUrl;
  } catch (error) {
    return 'uknown';
  }
};

const imgUrl = await getRandomGifUrl();
appendImageDom(imgUrl);
