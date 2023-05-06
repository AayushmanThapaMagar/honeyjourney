import swell from 'swell-js';

const options = {
    useCamelCase: false,   
}

// swell.init(process.env.NEXT_PUBLIC_SWELL_STORE, process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY, options);

swell.init('honey-journey-test-1', 'pk_8DZxN4Oz8AIe0BxL4A9Jg7V5G3Sh2vVx', options)

export {swell}