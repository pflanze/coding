// Traversing
//  Node vs Element Nodes
let ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
// console.log(ele.id);
let ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
let mainText = document.getElementById("text").firstElementChild;
console.log(mainText.textContent);
// nodeName, nodeType, id, innerText

// textContent gets the content of all elements, including <script> and <style> elements. In contrast.
// innerText only shows “human-readable” elements.
// more on that
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText

// nodeType
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType

// more on parentNode
//https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

let text = document.querySelector("span");
let closestElement = text.closest(".cool");
console.log(closestElement);