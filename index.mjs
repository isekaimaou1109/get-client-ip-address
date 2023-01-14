import fetch from 'node-fetch';

async function getClientInformation() {
  const ip = JSON.parse(
    (await (await fetch('https://jsonip.com/')).text())
  )["ip"];
  return await (await fetch(`https://iplist.cc/api/${ip}`)).text()
} 

export {
  getClientInformation
}