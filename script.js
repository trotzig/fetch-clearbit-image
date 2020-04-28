// import the data file:
const data = require('./data.json');

// import fetch, since node does not have fetch built-in
const fetch = require('node-fetch');

// define asynchronous function that we can run below
async function findImages() {
  for (item of data) {
    const imageUrl = `https://logo.clearbit.com/${item.website}`;
    const res = await fetch(imageUrl);
    if (res.ok) {
      console.log('Image exists:', imageUrl);
    } else {
      console.log('Image does not exist:', imageUrl);
    }
  }
}
findImages();
