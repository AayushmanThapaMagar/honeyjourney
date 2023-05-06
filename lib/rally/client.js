'use client'

import { swell } from '@/lib/swell/init/client';
import { Rally } from '@rallycommerce/swell';

const configuration = {
  swellInstance: swell 
}

Rally.init('9919a2df-7627-4ccb-9628-d146c39efeae', configuration);

export { Rally }