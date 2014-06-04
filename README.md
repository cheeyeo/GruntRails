Grunt+Rails
===========

Example of using Grunt with Rails without an asset pipeline.


Usage
============

This assumes you have some working knowledge of Grunt and have grunt installed

Clone this repo, cd and run

```js

  npm install

```

There is a default task of 'dev' which setups up a connect server and watch on
port 9000.

```js

  grunt dev

```

Assuming you have a rails app configured to run at port 3000 with asset pipeline
disbled, you can change the asset host within config/development.rb

```ruby
  config.action_controller.asset_host = "http://localhost:9000"
```

To enable live reload within your rails app, put the following into lauyouts/application.html.erb:

```html
    <script src="//localhost:35729/livereload.js"></script>
    <%= javascript_include_tag "application.min.js" %>
```

The 'dev' task generates an application.min.js in dist/javascripts and a application.min.css within dist/stylesheets


Deploy
============

To deploy the final assets to S3 run

```
  grunt deploy

```

This will compile and minify all your assets and run your unit tests before deploying
to S3.

There is a config file to be set in grunt-aws.json if so.

Testing
==============
Unit tests for your own js are within spec/javascripts and runs karma during development.


ToDo
==============

* Get karma to work in CI mode with phantomjs

* Some form of custom asset helper to deal with cache busting / replacing asset
digest in Rails application

