# beije Technical Assessment Markdown
**by Mehmet Ufuk Ertürk, 22.06.2023**

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). Project is for the technical assessment for a
internship position at [beije](https://beije.co/) company. 

## Getting started
On a terminal of your choice, run the following commands:

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the webpage

   ```bash
    npm run web
   ```
## Some remarks

After some time (when package downloads are complete), this command will open the app on a new tab on your local browser.
There you can view the contents of [Custom Package Selection Page](https://beije.co/custom-packet) replica. 

Source code can be found under `.\app\(tabs)\_layout.tsx`. Since default `create-expo-app` command is used for initial project creation,
some unneccessary files or packages may be included. 

A GitHub Gist created to track ChatGPT usage can be found here: [Gist](https://gist.github.com/merturk19/7adfa60abf8ddbd09deafe1a1199f5fd). 
It was mainly used for generating an initial layout for convenience and time management. Also for some minor debugging issues and gaining knowledge about
niche designing options in TypeScript.

**WARNING:** Could not solve a bug regarding sliders, where setting sliders back to 0 after setting them
to any other value is throwing an `Uncaught Error: Cannot read properties of undefined (reading 'toFixed')`. 


