import { initPlasmicLoader } from '@plasmicapp/loader-nextjs'

import { HelloWorld } from './components/HelloWorld'

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: 'bGMLH7aU3Xs7A99Z7CVmbH', // ID of a project you are using
      token:
        '0C4H07GoMTBkuUQLL9RDpL0T8Pk0bRt0dYz1ZKKjsAwXQKFIiriyMFAU8aFMI29rrpWrOK2i08bXn3Rzl9ixg', // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot',
  },
})
