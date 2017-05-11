const HtmlWebpackPlugin = require('html-webpack-plugin')

const getEntry = (pages) => {
  const entry = {}
  const allPages = ['commons', ...pages]

  allPages.map((page) => {
    entry[page] = `./src/app/${page}/scripts.js`
  })

  return entry
}

const getPlugins = (pages) => {
  const plugins = []

  pages.map((page) => {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/app/${page}/template.html`,
        inject: false
      })
    )
  })

  return plugins
}

module.exports = {
  getEntry,
  getPlugins
}
