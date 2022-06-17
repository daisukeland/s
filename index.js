const {
  spawnSync
} = require('node:child_process');
var fs = require("node:fs");
const dirs = fs.readdirSync(`${__dirname}/repos`)
fs = fs.promises;
const fetch = require("node-fetch")
const token = "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"
var i = 0;
console.log(process.argv)
async function f(url = '', data = {}) {

  var res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      authorization: `token ${token}`
    }
  });
  res = await res.json();

  return res;
}

async function c(name) {
  var data = ["use strict", "const { spawnSync } = require('node:child_process');", 'const name = require("./package.js");', `name = name || "${name}"`, clongit.toString(), "clongit(name);"].join("\n");
  await fs.writeFile(`${__dirname}/repos/${name}/clongit.js`, data, 'utf8');
  await spawnSync("node", [`${__dirname}/repos/${name}/clongit`]);
}
async function clongit(name) {
  await spawnSync("git", ["init"]);
  await spawnSync("git", ["add", "."]);
  await spawnSync("git", ["config", "--global", "user.email", "daisukeland4@gmail.com"]);
  await spawnSync("git", ["config", "--global", "user.name", "daisukeland"]);
  await spawnSync("git", ["commit", "-m", `${name}`]);
  await spawnSync("git", ["branch", "-M", "main"]);
  await spawnSync("git", ["remote", "add", "origin", `https://github.com/daisukeland/${name}.git`]);
  await spawnSync("git", ["push", "-u", "origin", "main"])
}


/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/daisukeland/s.git
git push -u origin main

git add . && git commit -m "Daisuke" && git push https://daisukeland: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@github.com/daisukeland/.git --all*/


(async function () {
  dirs.forEach(async (a, i) => {
    /*await f("https://api.github.com/user/repos", {
      "name": a,
      "private": true,
    });*/
    
    c(a);
  });
})();