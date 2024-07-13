const needle = require('needle');
const fs = require('fs');

const fetcher = (url, localPath) => {
  // grab data from specified url
  needle.get(url, (error, response) => {
    // check for errors and display them if present
    if (error) {
      console.error('Error fetching URL:', error);
      return;
    }
    // write the body of the url to specified path
    fs.writeFile(localPath, response.body, (err) => {
      // check for errors and display them if present
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      // log the size of the file and the new local path
      console.log(`Downloaded and saved ${response.body.length} bytes to ${localPath}`);
      return;
    });
  });
};

// TEST CASE
fetcher('http://google.com', './index.html');
