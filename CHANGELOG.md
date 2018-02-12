# 0.16.0(11-02-2018)

### Features 

* **gulp.concat**: one master css and js file, set from build.config on <code>package section</code>.
* **gulp.minJS**: change library (deprecated) to minify javascript files.

### Bug Fix

* **mailing**: let to send email (before doesn´t work).
* **material.icons**: change routes to load icons on web servers.

# 0.15.5(15-08-2017)

### Features 

* **gulp-copy**: improve vendor build.
* **rename**: set <code>media/first-screen to media/me</code>.
* **rename**: set <code>js/contact/contact_me to js/contact/contact-me</code>.

### Bug Fixed

* **npm**: add gulp-cache plugin.
* **build.config.json**: delete useless import files (core,polyfills,thirdLibraries).
* **script**: only async custom.

# 0.15.4(01-08-2017)

### Bug Fixed

* **index**: set master.css in head.

# 0.15.3(01-08-2017)

### Bug Fixed

* **compress.css**: improve set import.
* **scss**: improve transpile css.
* **index**: improve bing-seo.
* **pagespeed**: improve platform´s score.

# 0.15.2(19-07-2017)

### Bug Fixed

* **gulp**: add config files to task gulp´lint.
* **editor-config**: add config to integrate with editor text

# 0.15.1(17-07-2017)

### Features

* **bing-seo**: add meta for seo on bing.

### Bug Fixed

* **move**: sitemap.xml in app.

# 0.14.0(17-07-2017)

### Features

* **sitemap**: add sitemap to the site.

# 0.13.0(17-07-2017)

### Features

* **autoprefixer**: add autoprefixer to sass task.

# 0.12.0(17-07-2017)

### Features

* **progressive**: add necessary files.
* **seo**: add google analytics.
* **seo**: add files to a better search index.

### Bug Fixed

* **responsive**: let it resize on mobile devices.

# 0.11.0(14-07-2017)

### Features

* **lint**: add  gulp-w3cjs and added to gulp deploy workflow.

# 0.10.0(14-07-2017)

### Features

* **minify**: add gulp-imagemin to images optimizer.

# 0.9.1(14-07-2017)

### Features

* **size**: add size output console thanks to gulp-size.
* **minifies**: add gulp-size to the streams

# 0.8.1(13-07-2017)

### Features

* **lint**: add lint-sass Lint with Gulp and added to gulp deploy workflow.
* **config-rules**: add .sass-lint.yml file

### Bug Fixed

* **css**: applied lint-sass rules.

# 0.7.1(13-07-2017)

### Features

* **lint**: add to gulp start workflow.

### Bug Fixed

* **javascript**: js applied jsHint´s rules.
* **.jshintrc**: change to false "Prohibit variable use before definition"

# 0.7.0(12-07-2017)

### Features

* **lint**: add jsHint Lint with Gulp.
* **stylish-jsHint**: add stylish to the output console
* **config-rules**: add .jshintrc

# 0.6.0(12-07-2017)

### Features

* **package**: build a zip bundle production with Gulp.

### Bug Fixed

* **css-min**: remove make sourcemaps with scss, only made it clean-css (gulp-clean-scs) .
* **structure**: delete useless build folder in repository.

# 0.5.0(12-07-2017)

### Features

* **home**: add personal information.
