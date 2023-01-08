/* Slide-1 */

document.getElementById("s1").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio1"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio2"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio1"]').checked = true;
  }
});

/* Slide-2 */

document.getElementById("s2").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio2"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio3"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio1"]').checked = true;
  }
});

/* Slide-3 */

document.getElementById("s3").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio3"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio4"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio2"]').checked = true;
  }
});

/* Slide-4 */

document.getElementById("s4").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio4"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio5"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio3"]').checked = true;
  }
});

/* Slide-5 */

document.getElementById("s5").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio5"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio6"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio4"]').checked = true;
  }
});

/* Slide-6 */

document.getElementById("s6").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio6"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio7"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio5"]').checked = true;
  }
});

/* Slide-7 */

document.getElementById("s7").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio7"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio8"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio6"]').checked = true;
  }
});

/* Slide-8 */

document.getElementById("s8").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio8"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio9"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio7"]').checked = true;
  }
});

/* Slide-9 */

document.getElementById("s9").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio9"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio10"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio8"]').checked = true;
  }
});

/* Slide-10 */

document.getElementById("s10").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio10"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio11"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio9"]').checked = true;
  }
});

/* Slide-11 */

document.getElementById("s11").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio11"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio12"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio10"]').checked = true;
  }
});

/* Slide-12 */

document.getElementById("s12").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio12"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio13"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio11"]').checked = true;
  }
});

/* Slide-13 */

document.getElementById("s13").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio13"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio14"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio12"]').checked = true;
  }
});

/* Slide-14 */

document.getElementById("s14").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio14"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio15"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio13"]').checked = true;
  }
});

/* Slide-15 */

document.getElementById("s15").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio15"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio16"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio14"]').checked = true;
  }
});

/* Slide-16 */

document.getElementById("s16").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio16"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio17"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio15"]').checked = true;
  }
});

/* Slide-17 */

document.getElementById("s17").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio17"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio17"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio16"]').checked = true;
  }
});
 
/* Slide-18 */
document.getElementById("s18").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio18"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio18"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio17"]').checked = true;
  }
});
document.getElementById("s19").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio19"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio19"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio18"]').checked = true;
  }
});
document.getElementById("s20").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio20"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio20"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio19"]').checked = true;
  }
});
document.getElementById("s21").addEventListener("wheel", (e) => {
  document.querySelector('input[class="slide-radio21"]').checked = false;
  if (e.deltaY > 0 || e.deltaX > 0) {
    document.querySelector('input[class="slide-radio21"]').checked = true;
  } else {
    document.querySelector('input[class="slide-radio20"]').checked = true;
  }
});

const searchParams = new URLSearchParams(document.location.search);
if (searchParams.has("page")) {
  const pageStr = searchParams.get("page");
  if (validator.isInt(pageStr, {
    min: 1,
    max: 17,
    allow_leading_zeroes: false
  })) {
    const pageNum = Number.parseInt(pageStr);
    document.querySelector('input[class="slide-radio1"]').checked = false;
    document.querySelector(`input[class="slide-radio${pageNum}"]`).checked = true;
  }
}
