# Experiment with the PixiJS Creation Engine

I am learning [PixiJS](https://pixijs.com/) in this project.

## Thanks

Many thanks to [JetBrains](https://www.jetbrains.com/?from=experiment-with-pixijs) who provide
an [Open Source License](https://www.jetbrains.com/community/opensource/) for this project ❤️.

## Developer Guide

To run the application, host its files on a local HTTP server:

```shell
npx browser-sync start --server --files "*.html, *.js, *.png"
```

Your browser should automatically open http://localhost:3000 and refresh every time you change an HTML or JavaScript
file.

## Hosting

You can host the application on a static web server. For example, you can host it on [itch.io](https://itch.io/):

1. Run the `./build.sh` script to produce the `./build.zip` containing the HTML, JavaScript and PNG files.
2. Upload the `./build.zip` file to your [itch.io](https://itch.io/) project.

## References

- [PixiJS: Getting Started (v8.x)](https://pixijs.com/8.x/guides/basics/getting-started)
- [Browsersync](https://browsersync.io/)
- [itch.io](https://itch.io/)
- [JetBrains: Open Source Licenses](https://www.jetbrains.com/community/opensource/)
