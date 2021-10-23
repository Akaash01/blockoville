const counters = document.querySelectorAll(".counter");
const countersection = document.querySelector(".licensed-section");
const speed = 200; // The lower the slower
let flag = false;
countersection.addEventListener("mouseover", () => {
  if (!flag) {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = parseInt(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
    flag = true;
  }
});
