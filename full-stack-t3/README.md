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

## Next steps

I'd like to:

- Deploy with CI/CD to the cloud
- Add tests
- Do an accessibility review
- Add "last edited" / "created on" to the UI
- Use a better database than SQLLite (probably postgresql). This is done by [changing the schema config for prisma](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Add an undo button for deletes, or at least a confirmation dialog if it cannot be reversed

## How do I deploy this?

Follow the T3 deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
