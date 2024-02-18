function alertCookie() {
    alert(document.cookie);
}

let name = "my name";
let value = "John Smith";
let date = new Date(Date.now() + 86400e3);

date = date.toUTCString();
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
document.cookie = "user=Adrian; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT"
document.cookie = "user=Adrian; expires=" + date;

alertCookie();