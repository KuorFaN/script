function urlCleaner(url) {
  var nextSlash;
	console.log(url);
  url = url.replace("https://", "");
	console.log(url);
  nextSlash = url.indexOf("/");
	console.log(url);
  url = "https://www." + url.substring(0, nextSlash + 1);
	console.log(url);
  return url;
}

function isDenied(url) {
  var blackList = [
    "https://www.affbank.com/",
		"https://www.short-in.ga/",
		"https://www.t.co/",
		"https://www.l.facebook.com/",
  ];

  for (let index = 0; index < blackList.length; index++) {
    if (url == blackList[index]) {
      return true;
    }
  }
  return false;
}

var referrer = document.referrer;
console.log(document.referrer);
referrer = urlCleaner(referrer);
console.log(document.referrer);
if (isDenied(referrer)) {
  window.location.href = "https://www.google.com/";
} 
