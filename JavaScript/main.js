const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (
      entry.isIntersecting && entry.target.classList.contains("notvissible")
    ) {
      entry.target.classList.add("show");
    } else {
      if (entry.isIntersecting && entry.target.classList.contains("cardGlow")) {
        setTimeout(() => {
          entry.target.classList.add("scroll");
        }, 600);
      } else {
        entry.target.classList.remove("scroll");
      }
    }
  });
});

const hiddenElements = document.querySelectorAll(".notvissible");
hiddenElements.forEach((el) => observer.observe(el));

const cardGlow = document.querySelectorAll(".cardGlow");
cardGlow.forEach((cd) => {
  observer.observe(cd);
});

let current = 0;

const containerEl = document.querySelectorAll(".container");
const tabs = document.querySelectorAll(".btn li");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

const toggletabs = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("tactive");
  });
  tabs[current].classList.add("tactive");
};

const togglecontainer = () => {
  containerEl.forEach((container) => {
    container.classList.remove("active");
  });
  containerEl[current].classList.add("active");
};

const toggleprev = () => {
  if (current == 0) {
    prevEl.disabled = true;
  } else {
    prevEl.disabled = false;
  }
};

const togglenext = () => {
  if (current == tabs.length - 1) {
    nextEl.disabled = true;
  } else {
    nextEl.disabled = false;
  }
};

const next = () => {
  if (current < tabs.length - 1) {
    current++;

    togglecontainer();
    toggletabs();
    toggleprev();
    togglenext();
  }
};
const prev = () => {
  if (current > 0) {
    current--;
  }
  togglecontainer();
  toggletabs();
  toggleprev();
  togglenext();
};


const bganmine = document.getElementById("colorbox");

for (let i = 0; i < 400; i++) {
 const colorBox = document.createElement('div');
 colorBox.classList.add('colorbox');
 bganmine.append(colorBox)
  
}
