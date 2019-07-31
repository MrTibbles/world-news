# World News 🌎

## Brief 📝
The goal is to build a webpage that allows users to see news about a particular country in an intuitive way. There are no designs, and the UX is not defined, so use your best judgement to complete the requirements.

## Goal 🥅
The goal is to complete as many of the business requirements as possible, whilst demonstrating technical excellence. You will need to make technical decisions, as well as prioritise deliverables. The completed project should allow us to assess your technical capability, as well as discuss project level decisions and your rationale.

## Business Requirements
- As a user I would like to view the world map on a website so I can easily select a continent.
- As a user I would like to select a continent and see all the countries in that continent so I can select a country.
- As a user I would like to see google results from the BBC about a particular country.

- As a user, I would like to share a URL with my friends, so they can see the same information as I see.
- As a developer, I would like to be able to follow a Readme, and get the application running, so I can easily contribute towards the code.
- ⭐️ As a developer, I would like to query all countries within a given continent using GraphQL.
- ⭐️ As a developer, I would like to query for BBC news articles of a country using GraphQL.
- ⭐️ As a developer, I would like to see an example unit test, so I can continue adding tests.

## Plan of Attack 🤺
### Client
Initial page will display the world map. Each continent will be clickable. When clicking a continent it will change route to the respective continent, ie. `/europe` or `/north-america`.
When each continent route loads it will fire a GQL request to retrieve the news for that continent. The news will then be rendered in a simple list view, at a later date windowing/virtualised list should be implemented to improve user interaction speed. Each news story will then have a share button to allow the user to share the story with whoever they please. Countries within each continent will not be clickable due to SVG format not supporting currently. It can be added with time and someone comfortable creating/editing vector images; ideally in Adobe Illustrator as the exports are best in class for developer usability.

### Server
A graphql gateway API will be implemented using Apollo Server. It will implement a subset of the google API schema, purely to reduce development time. Ideally SSR would be used for increased SSO and performance, however that can follow.
API operations:

```graphql
query {
  getNewsByContinent(filter: NewsByContinentInput!): NewsResult
}

input NewsByContinentInput {
  continent: String! # 'north-america' | 'europe'
}
```
