console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      function shortenUrl() {
        const urlWithKey = url + '?key=' + apiKey;
        const urlToShorten = $inputField.val();
        const data = JSON.stringify({longUrl: urlToShorten});
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
          }
        };
        xhr.open('POST', urlWithKey);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
      }
    };
    let isMatchOne = Structured.match(code, structureOne);
    assert.isOk(isMatchOne, 'Did you replace \'console.log()\' with the code from above?');
  });
});
