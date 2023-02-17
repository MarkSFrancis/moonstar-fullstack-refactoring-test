# Posts

This is an app for sharing and updating posts, built using the [T3 Stack](https://create.t3.gg/).

## Getting started

- Install the latest LTS version of [NodeJS](https://nodejs.org/en/)
- Clone the repository onto your local machine
- Open a terminal at this folder
- Install yarn with `npm i yarn -g`
- Install app dependencies by running `yarn`
- Run the app with `yarn dev`
- Open your browser at `http://localhost:3000`

## Where I've done things differently

- The database in development mode is using SQLLite. It could easily be swapped for PostgreSQL in production using prisma config. SQLLite is a smaller database, that's easier for the dev machines to run and start up quickly
- I've merged the front-end and back-end into a single project
- Instead of separating layers, I have deliberately coupled the data layer, API layer, and even front-end layers to make development seamless across the layers. This means that removing or renaming a database field will propagate across the app, and show all errors correctly. No need to manually create maps between the layers, or have multiple similar models - one for each layer.
- I have not dockerised the app in any way. Most cloud hosting options natively support NextJS, and so docker would only complicate the CI/CD process. In terms of development, prisma is running its own database within the single `yarn dev` command, alongside the NextJS server. In the cloud, I'd likely use a cloud-native database, such as Planetscale.
- I have used CSS in JS instead of scss, as I prefer this development workflow for rapid small to medium sized apps
- I have not used REST, and instead opted for [tRPC](https://trpc.io/), which uses RPC over Web. This often has greater performance, but comes at the cost of being more difficult to use as a standalone API
- I have not minimized runtime dependencies in any way. For what the app is doing, it's probably larger than it needs to be. But this enables a far superior dev experience, which leads to much faster prototyping and editing, at the cost of the time to [largest content paint](https://web.dev/lcp/)
- I have not implemented a `PATCH` method, as the UI always shows the same edit form (which includes all fields)

## If I had more time

I'd like to:

- Deploy with CI/CD to the cloud (likely using [Vercel](https://vercel.com/) + [Planetscale](https://planetscale.com/))
- Add tests (likely using [react-testing-library](https://testing-library.com))
- Do an accessibility review. React testing library often helps with this
- Add "last edited" / "created on" to the UI (likely using [luxon](https://moment.github.io/luxon/) for date formatting)
- Use a better database than SQLLite (probably postgresql). This is done by [changing the schema config for prisma](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Add an undo button for deletes (likely using a state library like [Zustand](https://zustand-demo.pmnd.rs/)), or at least a confirmation dialog if it cannot be reversed (likely using [Chakra UI's alert dialog](https://chakra-ui.com/docs/components/alert-dialog/usage))
- Add pagination (likely using infinite scroll with [TanStack Virtual](https://tanstack.com/virtual/v3/docs/examples/react/infinite-scroll) for performance)

## How do I deploy this?

Follow the T3 deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
