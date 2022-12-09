$(document).ready(() => {
  /* this is the old way of doing this but there is a better way. and this is the one I build myself without help!!!
  //isolate count to make sure when someone clicks on the button add or substract or reset the number here changes
  let count = 0;
  //substract btn
  let substract = document.querySelector(".substract");
  // reset btn
  let reset = document.querySelector(".reset");
  //add btn
  let add = document.querySelector(".add");
  //this is for me to lower the count when clicking on the substract btn
  $(substract).on("click", () => {
    $(".count").text(count--);
  });
  //this is the reset button
  $(reset).on("click", () => {
    count = 0;
    $(".count").text(count);
  });
  //this is the add button
  $(add).on("click", () => {
    $(".count").text(count++)
  });*/
  //////////////////////////////////////////////////////////////////////////
  //this is the one the teacher build. to me it is more complex and lengthy than mine but its ok.
  let count = document.querySelector(".count");
  let buttons = document.querySelector(".buttons");

  $(buttons).on("click", (e) => {
    if (e.target.classList.contains("substract")) {
      count.innerHTML--;
      setColor()
    }
    if (e.target.classList.contains("reset")) {
      count.innerHTML = 0;
      setColor()
    }
    if (e.target.classList.contains("add")) {
      count.innerHTML++;
      setColor()
    }
  });

  function setColor() {
    if (count.innerHTML < 0) {
      $(".count").css("color", "red");
    } else if (count.innerHTML > 0) {
      $(".count").css("color", "yellow");
    } else {
      $(".count").css("color", "white");
    }
  }

});
