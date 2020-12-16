const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // plus turns the string to a number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    //determines the increment level
    const increment = target / 315;

    //if the increment is less than the target
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      //prevent the increment going above the target
      counter.innerText = target;
    }
  };

  updateCounter();
});
