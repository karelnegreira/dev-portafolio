import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'dpzc99zq',  
    dataset: 'production', 
    apiVersion: '2023-07-30', 
    useCdn: true, 
    token: process.env.SANITY_PROJECT_TOKEN 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);