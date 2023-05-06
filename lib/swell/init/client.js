import swell from 'swell-js';

const options = {
    useCamelCase: false,   
}

// swell.init(process.env.NEXT_PUBLIC_SWELL_STORE, process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY, options);

swell.init('honey-journey-test-1', 'pk_F3ZScxaQlJQ6W8V7jY226BPXkXmyGgS5', options)

export {swell}