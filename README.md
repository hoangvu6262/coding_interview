# Coding Project (React with TypeScript): Infinite Scrolling and Searchable Product List

For DEMO, use [Infinte Scroll and Searchable Products](https://stripe.com/docs/testing)

Requirements:

**Using this [product api](https://dummyjson.com/docs/products) to implement the infinite scrolling list for display list of products.**

1. Each time the user **scrolls to the end of the list, fetch the next 20 products**.
2. **Display the list of products** with relevant information (e.g., name, price, image).
    1. Keep the design as simple as possible. Please note that the **design will not be evaluated.**
3. Implement an **input for searching product name** (using _/products/search?q_ ).
   Whenever user typing, fetch data and update the product list.

### Prerequisites

\*\*Node version 16.xx or later

### Cloning the repository

```shell
git clone https://github.com/hoangvu6262/coding_interview.git
```

### Install packages

```shell
npm i

```

### Setup .env file

```js
NEXT_PUBLIC_API_URL = https://dummyjson.com
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
