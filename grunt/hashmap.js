module.exports = {
  options: {
    // These are default options
    output: 'dist/hashmap.json',
    algorithm: 'md5', // the algorithm to create the hash
    rename: '#{= dirname}/#{= basename}_#{= hash}#{= extname}', // save the original file as what
    keep: true, // should we keep the original file or not
    hashlen: 10, // length for hashsum digest
  },
  all: {
    // Target-specific file lists and/or options go here.
    cwd: 'dist',
    src: '**/*.{css,js,pdf,eps,png,jpg,jpeg,gif,eot,svg,ttf,woff}',
    dest: 'dist'
  }
};
