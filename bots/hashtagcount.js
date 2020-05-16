require('../src/tools-for-instagram.js');
var schedule = require('node-schedule');

//install node-schedule with
//npm i node-schedule


(async() => {
  let ig = await login();
  
  async function hashtag(ig) {
    let hashtag = "lockdown";
    console.log("\n -- Hashtag counter --\n".bold.underline);

    let posts = await recentHashtagList(ig, hashtag);
    console.log("Posts received with hashtag: ".cyan + posts.length);
    let promises = [];
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

    }
    Promise.all(promises).then(function() {
        console.log("end");
    });
  }
// every 10 minutes do hashtag job
     schedule.scheduleJob('*/7 * * * *', async function () { await hashtag(ig)});

})();
