
class Cookie{
  constructor(domain,expirationDate,name,secure,value) {
    this.domain = domain;
    this.expirationDate = expirationDate;
    this.name = name;
    this.secure = secure;
    this.value = value;
  }
}
var cookies = [];
chrome.tabs.query({currentWindow: true, active: true}, function(tabsArray) {
  console.log(tabsArray);
  var url = (tabsArray[0].url).split('/');
  var url2 = url[2];
  console.log(url2);
  console.log(chrome.cookies.getAll({domain: url2}, function(c){
    for(i=0;i<c.length;i++){
      cookies[i] = new Cookie(c[i].domain,c[i].expirationDate,c[i].name,c[i].secure,c[i].value);
    }
    console.log(cookies);
  }));
});

