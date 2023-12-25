import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'svypnig2',
  dataset: 'production',
  apiVersion: '2023-03-01',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: 'skSxguEDgwe7YwxsopocQ7xUGMknGr4zOpr0egzVernPtgUwrajZQk9ES4sCL8YWRPOHOaYqr6FU2Uxxf0b6Dkc18OQdGdGuKaq9WQUXcpTOsQWPlKbp4MiDH9K0TN4DOJNxVIwX63gIGYIxOo8PSy4Fa7ZsN6bKqb8OiECRXGOCG21OsDN0',
});

const imageUrlBuilderInstance = imageUrlBuilder(sanityClient);

export const getImageUrl = (source) => {
  if (!source) {
    console.error('Image source is undefined or null');
    return null;
  }
  return imageUrlBuilderInstance.image(source).url();
};