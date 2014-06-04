module.exports = {
  options: {
    assets: '<%= hashmap.options.output %>',
    hashmap_rename: '<%= hashmap.options.rename %>'
  },
  files: {
    src: ['dist/*.css'],
  }
};
