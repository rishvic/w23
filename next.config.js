module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/intro/intro.html',
        permanent: true,
      },
    ]
  },
}