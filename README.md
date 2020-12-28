# React Webpack Template &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
This project was created in order that it can be used for different projects, personal, business, you can give it the use you want.
## Available Scripts
To start clone the project and use:
### `npm i ` or you can also use `npm install`

To start the server in your browser:
### `npm run dev`

To create your production files:
### `npm run build`

## What does this template bring?
This template already has installed what is necessary to be able to be used in its entirety
* `ReactJS and ReactDOM`
* `JSX | JS`
* `CSS | SASS`
* `IMG`


```js
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/,
        use: [
            'style-loader', 
            'css-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use:  [{
            loader: 'file-loader'
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ],
        resolve: {
            extensions: ['.sass', '.scss']
        }
      }
    ],
  }
```