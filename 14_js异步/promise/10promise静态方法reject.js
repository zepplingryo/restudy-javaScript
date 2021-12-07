const msg = "soo bad message";

const rejectmsg = Promise.reject(msg);

rejectmsg
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("e", err);
  });
