var b = require('./b.html');
var text = 'hello ' + b.text;

document.getElementsByTagName('body')[0].innerHTML = text;

exports.model = {
    text: text
};