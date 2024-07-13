const needle = require('needle');
const fs = require('fs');

const fetcher = (url, localPath) => {
  needle.get(url, (error, response) => {
    if (error) {
      console.error('Error fetching URL:', error);
      return;
    }
    // Ensure you are writing the 'body' of the response
    fs.writeFile(localPath, response.body, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log(`Downloaded and saved ${response.body.length} bytes to ${localPath}`);
      return;
    });
  });
};

// TEST CASE
fetcher('http://google.com', './index.html');
