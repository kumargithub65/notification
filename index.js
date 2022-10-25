console.log("retfw");
let value = document.getElementById("button");
console.log(value);
value.addEventListener("click", () => {
  console.log(value);
  let notification = Notification.requestPermission()
    .then((perm) => {
      if (perm === "granted") {
        new Notification("example", {
          body: "this. im s more work yaer",
        });
        new Notification("example", {
          body: "this. im s more work yaer",
        });

        new Notification("giugu", {
          body: "this. im s more work yaer",
        });
        new Notification("chpk", {
          body: "this. im s more work yaer",
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
      notification = new Notification("come back please", {
        body: "please come bacck",
        timestamp: Math.floor(Date.now()),
      });
    }, 25000);
  } else {
    if (interval) clearInterval(interval);
    if (notification) notification.close();
  }
});
