# Moonstar coding test for fullstack developer

## Introduction

One of the junior team members has been asked by the product owner to build a simple POC of the newsfeed similar to Facebook/ LinkedIn one.

We wanter to have a separte backend and frontend solutions.

He started working on it, but got sick and now is unavailable.

Product Owner asked you if you can complete the work.

## Backend

We want to have basic Get, GetById, Post, Put, Patch and Delete implemented.

Users should be able to create a photos using text only, photo only or text and photo. Posts is the only entity that api should support, there are no other enitites required.

We need to follow all rest api guidelines as best as we can. The only expection is that we do not need to return descriptive messages.

## Frontend

We need to create a modern newsfeed that will show the posts. It's up to you to design best user experience. We just want something that feels modern.

When user clicks on post, post should appear in the full screen.

User should also have the ability to add, edit and delete the post.

98% of our user base uses mobile devices.

You can choose the technology that you like but this technology should not use SSR.

## Bonus points

### Backend

- Write tests
- Implement better architecture, decouple data access layer from api layer
- Make sure we follow best REST guidelines
- Use most efficent LINQ methods, including in presupplied endpoints
- Docerize the solution + database
- Deploy the solution to the cloud, manually or with CI/ CD pipeline
- Add OpenApi and/ or Swagger
- Wrtie a nice Readme file

### Frontend

- Write tests
- Implement modern pagination, that would be good for newsfeed
- Implement second layout for desktop
- Use scss to describe classes
- Use Typescript
- Use pure Javascript/ Typescript with no runtime dependencies
- If you are using any framework minize dependencies
- Write a nice Readme file

Any other ideas of your choice.

---

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
- Use a better database than SQLite (in production). This is done by [changing the schema config for prisma](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- Add an undo button for deletes (likely using a state library like [Zustand](https://zustand-demo.pmnd.rs/)), or at least a confirmation dialog if it cannot be reversed (likely using [Chakra UI's alert dialog](https://chakra-ui.com/docs/components/alert-dialog/usage))
- Add pagination (likely using infinite scroll with [TanStack Virtual](https://tanstack.com/virtual/v3/docs/examples/react/infinite-scroll) for performance)

## How do I deploy this?

Follow the T3 deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
