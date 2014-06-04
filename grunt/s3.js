module.exports = {
  options:{
    key: '<%= aws.key %>',
    secret: '<%= aws.secret %>',
    bucket: '<%= aws.bucket %>',
    access: '<%= aws.access %>',
    maxOperations: 20
    // headers: {
    //   // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
    //   "Cache-Control": "max-age=630720000, public",
    //   "Expires": new Date(Date.now() + 63072000000).toUTCString()
    // }
  },
  deploy:{
    upload: [
      {
        src: 'dist/hashmap.json',
        dest: 'hashmap.json'
      },
      {
        src: 'dist/javascripts/*', // wildcards only work if the bucket is set to default of us region
        dest: 'javascripts/',
      },
      {
        src: 'dist/stylesheets/*',
        dest: 'stylesheets/',
      },
      {
        src: 'dist/fonts/*',
        dest: 'fonts/',
      },
      {
        src: 'dist/images/*',
        dest: 'images/',
      }
    ]
  }
};
