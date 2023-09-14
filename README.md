# Coding Project (React with TypeScript): Infinite Scrolling and Searchable Product List

For DEMO, use [Infinte Scroll and Searchable Products](https://hakunamatata123.netlify.app/)

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

## How to test

Step 1: Click to "Products" button:

![Step 1](https://res.cloudinary.com/dg5ubmcvx/image/upload/v1694672180/step1_ctrige.png)

Step 2: Check Infinite Scroll on the Products Page:

![Step 1](https://res.cloudinary.com/dg5ubmcvx/image/upload/v1694672378/Screen_Shot_2023-09-14_at_13.19.03_nc2chy.png)

Step 2: Check Searchable Products:

![Step 1](https://res.cloudinary.com/dg5ubmcvx/image/upload/v1694672527/Screen_Shot_2023-09-14_at_13.21.23_smnka4.png)
