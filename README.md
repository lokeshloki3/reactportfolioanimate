Demo - https://lokeshloki3.github.io/reactportfolioanimate/

Steps -

npm create vite@latest --template react

vite tailwind install

npm install

google fonts in index.css @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

@tailwind base; @tailwind components; @tailwind utilities;

:root { font-family: "Inter", sans-serif; background: #000000; }

npm i react-icons

background snippets in app.js - https://bg.ibelick.com/

npm i framer-motion

for smooth scroll add in index.css html { scroll-behavior: smooth; }

npm install gh-pages --save-dev

Add in package.json above name "homepage" : "https://username.github.io/reponame"

Add both in Scripts in package.json above dev - "predeploy":"npm run build", "deploy":"gh-pages -d dist",

Add in vite.config.js above plugin - base:"/reponame/",
