module.exports = {
  /*
   ** Headers of the page
   */
  css: [
    '@/assets/sass/main.sass'
  ],

  /*
   ** Add element-ui in our app, see plugins/element-ui.js file
   */
  plugins: [
    '~/plugins/fireinit',
  ],
  head: {
    title: "Green-leafs",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "web market &apos;green-leaf&apos;"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|PT+Sans:400,700&amp;subset=cyrillic'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'firebase'
    ],
    extend(config, {
      isDev
    }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        }, {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, "not_exist_path")
          ],
          loader: "style!css"
        }, {
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url?limit=512&&name=[path][name].[ext]?[hash]'
        })
      }
    }
  }
};
