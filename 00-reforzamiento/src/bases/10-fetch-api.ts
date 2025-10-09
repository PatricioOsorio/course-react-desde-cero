import type { GiphyRandomResponse } from '../models/giphy.interface';

const API_KEY = 'vfEjmi6MjznQJlVN55t3vq3ypbsHZY8w';

const appendImageDom = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.append(imgElement);
};

try {
  const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const json: GiphyRandomResponse = await request.json();

  const imageUrl = json.data.images.original.url;
  console.log({ imageUrl });
  appendImageDom(imageUrl)
} catch (error) {}
