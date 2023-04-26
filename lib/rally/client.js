'use client'

import { swell } from '@/lib/swell/init/client';
import { Rally } from '@rallycommerce/swell';

const configuration = {
  swellInstance: swell 
}

Rally.init('98fdef95-3933-4d6a-b71a-0bd704a30e60', configuration);

export { Rally }