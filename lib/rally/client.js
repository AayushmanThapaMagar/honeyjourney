'use client'

import { swell } from '@/lib/swell/init/client';
import { Rally } from '@rallycommerce/swell';

const configuration = {
  swellInstance: swell 
}

Rally.init('9945d9ed-fc52-4811-b5c7-54a197776fec', configuration);

export { Rally }