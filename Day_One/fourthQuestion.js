// Write a function Boolean isValidURL(String url).

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}/g);
    console.log(res)
    if(res == null)
        return false;
    else
        return true;
  }
  

  const isResult = isUrlValid("http://google.co.in/");
  
  console.log(isResult)