import swell from 'swell-js';

const options = {
    useCamelCase: false,   
}

// swell.init(process.env.NEXT_PUBLIC_SWELL_STORE, process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY, options);

swell.init('honey-journey', 'pk_c69gxC12d16XfXjbqE0QXffUNEIBmz9f', options)

export {swell}