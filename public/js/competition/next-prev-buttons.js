"use strict";

const pageCount = 28;
const nextOnClicks = [];
const prevOnClicks = [];

function nextPage(page) {
  return (page) % pageCount + 1;
}
function prevPage(page) {
  return (page + pageCount - 2) % pageCount + 1;
}

for (let page = 1; page <= pageCount; page++) {
  nextOnClicks[page] = function () {
    document.querySelector(
      `input[class="slide-radio${page}"]`
    ).checked = false;
    document.querySelector(
      `input[class="slide-radio${nextPage(page)}"]`
    ).checked = true;
  };

  prevOnClicks[page] = function () {
    document.querySelector(
      `input[class="slide-radio${page}"]`
    ).checked = false;
    document.querySelector(
      `input[class="slide-radio${prevPage(page)}"]`
    ).checked = true;
  };
}
