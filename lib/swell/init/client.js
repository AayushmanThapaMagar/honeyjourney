import swell from 'swell-js';

const options = {
    useCamelCase: false,   
}

// swell.init(process.env.NEXT_PUBLIC_SWELL_STORE, process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY, options);

swell.init('honeyjourney', 'pk_b2qeqwfsJ1l4zNUVQOlFim2zMvIvbQDr', options)

export {swell}