requirejs_example
=================

1. To compile the Typescript files, use:

		tsc --module amd www/scripts/src/[your-file].ts

2. Open a new browser window, along with the browser's developer tools (in Firefox, they're in Tools > Web Developer > Toggle Tools; in Chrome, they're under View somewhere).

3. Open www/app.html in your browser (in Firefox, on a Mac, using File > Open > /path/to/www/app.html)

You should see the output of foo.js (as well as everything it calls) in the Javascript console of the developer tools.