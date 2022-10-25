console.log("retfw");
let value = document.getElementById("button");
console.log(value);
value.addEventListener("click", () => {
  console.log(value);
  let notification = Notification.requestPermission()
    .then((perm) => {
      if (perm === "granted") {
        new Notification("hi  this is kumar", {
          body: "thanks for enabling notifications",
        });
       new Notification("hi  happy  to check you again", {
          body: "hacked",
        });
      } else {
        alert("please enable notification");
      }
    })
    .catch((perm) => {
      alert(perm + "errro");
    });
});

let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  let dates = ne;
  if (document.visibilityState === "hidden") {
    interval = setInterval(() => {
      notification = new Notification("please visit page ", {
        body: "kumar is waiting for you",
        timestamp: Math.floor(Date.now()),
      });
    }, 2500);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});
