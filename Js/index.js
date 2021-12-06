"use strict";

const isReload = () => {
  window.location.reload();
};

document.getElementsByClassName("header__brand").onclick = isReload;
