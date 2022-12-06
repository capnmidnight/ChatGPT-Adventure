// paste this into the JS console of your
// browser to echo out a text log of your Chat GPT session
const root = document.querySelector("main div.flex.flex-col.items-center.text-sm.h-full");
const blocks = Array.from(root.children);
const names = ["Me", "ChatGPT"]
console.log(blocks
    .map((v, i) => `${names[i % 2]}: ${v.innerText}`)
    .join("\n=======================\n"));