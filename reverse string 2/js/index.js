

function reverse(text) {
    for (let i = text.length - 1; i >= 0; --i) {
      document.getElementById("output").innerHTML += text[i];
    }
  }