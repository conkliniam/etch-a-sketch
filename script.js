const DEFAULT_LENGTH = 16;
const grid = document.querySelector("#grid");
const button = document.querySelector("button");

addGridItems(DEFAULT_LENGTH);

button.addEventListener("click", (event) => {
  let sideLength = 0;

  do {
    sideLength = +prompt("How many squares per side for the new grid?");
  } while (sideLength < 1 || sideLength > 100);

  grid.innerHTML = "";
  addGridItems(sideLength);
});

function addGridItems(sideLength) {
  const percent = `${100 / sideLength}%`;
  const flex = `1 0 ${percent}`;

  for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      div.classList.add(`column${j}`);
      div.classList.add(`row${i}`);
      div.style.flex = flex;
      div.style.paddingBottom = percent;

      div.addEventListener("mouseover", handleMouseOver);

      grid.appendChild(div);
    }
  }
}

function handleMouseOver(event) {
  const div = event.target;
  div.classList.add("blue");
}
