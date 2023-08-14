import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'dpzc99zq',  
    dataset: 'production', 
    apiVersion: '2023-07-30', 
    useCdn: true, 
    token: 'skfLMUVx1MaWIXs6S9sc7rB36TSZwSDj6Yv6lYMaPA0V3z7RlZHm8ZN0zYv12qwPl7nCKRFx2P3zoCqBO7HVyC4XSkiBoLNkZezTEiWANnYKCUnIt3AeZw3P3w2AEPMXlWHB59IP9OpNhmtX0SIUyaR7dz52HUEgLCEaAxO0OeKoElWPJaE3', 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);