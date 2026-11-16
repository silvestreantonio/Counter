let counterList = [];
if (localStorage.getItem("counters")) {
  counterList = JSON.parse(localStorage.getItem("counters"));
  counterList.forEach((counter) => {
    creaCounter(counter);
  });
}

const insertBtn = document.getElementById("insertCounter-btn");

const infoContainer = document.createElement("div");
infoContainer.classList =
  "flex flex-col justify-center items-center gap-3 md:text-2xl hidden";

const label = document.createElement("label");
label.classList = "dark:text-white";
label.textContent = "Inserisci il titolo del counter che vuoi creare:";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "es. Allenamenti");
input.classList =
  "p-1 rounded-full text-center bg-white w-[50%] md:w-[25%] scroll-auto mx-auto";

const createButton = document.createElement("button");
createButton.classList =
  "bg-blue-400 dark:bg-blue-800 dark:text-white p-3 rounded-full hover:underline";
createButton.textContent = "Crea counter";

infoContainer.append(label, input, createButton);
document.body.appendChild(infoContainer);

insertBtn.addEventListener("click", function () {
  infoContainer.classList.remove("hidden");
  input.focus();
});

infoContainer.addEventListener("click", (event) => {
  if (event.target === createButton) {
    if (input.value.trim() === "") {
      alert("Spazi vuoti non ammessi");
    } else {
      const newCounter = {
        id: Date.now(),
        title: input.value.trim(),
        value: 0,
      };
      saveCounter(newCounter);
      creaCounter(newCounter);
      infoContainer.classList.add("hidden");
      input.value = "";
    }
  }
});

function creaCounter(counter) {
  const mainContainer = document.createElement("div");
  mainContainer.classList =
    "bg-orange-300 dark:bg-cyan-600 dark:text-white h-auto w-[90%] pb-5 gap-10 rounded-3xl mx-auto flex flex-col justify-around items-center text-5xl md:text-6xl";

  const titleContainer = document.createElement("div");
  titleContainer.classList =
    "flex justify-between items-center w-full p-5 gap-5";

  const restartButton = document.createElement("button");
  restartButton.classList =
    "p-3 transition duration-100 ease-in-out hover:-translate-y-2 active:translate-y-0";
  restartButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>`;

  const title = document.createElement("h2");
  title.classList = "wrap-anywhere";
  title.textContent = counter.title;

  const deleteButton = document.createElement("button");
  deleteButton.classList =
    "p-3 transition duration-100 ease-in-out hover:-translate-y-2 active:translate-y-0";
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>`;

  const counterContainer = document.createElement("div");
  counterContainer.classList =
    "flex justify-around items-center w-full p-5 gap-5";

  const decreaseButton = document.createElement("button");
  decreaseButton.classList =
    "transition duration-100 ease-in-out hover:-translate-y-2 active:translate-y-0 text-red-500";
  decreaseButton.textContent = "-";

  const index = document.createElement("span");
  index.classList = "wrap-anywhere";
  index.textContent = counter.value;

  const increaseButton = document.createElement("button");
  increaseButton.classList =
    "transition duration-100 ease-in-out hover:-translate-y-2 active:translate-y-0 text-green-500";
  increaseButton.textContent = "+";

  titleContainer.append(restartButton, title, deleteButton);
  counterContainer.append(decreaseButton, index, increaseButton);
  mainContainer.append(titleContainer, counterContainer);
  document.body.appendChild(mainContainer);

  mainContainer.addEventListener("click", (event) => {
    if (event.target === increaseButton) {
      counter.value = increaseCounter(counter);
      updateStorage();
      updateCounter(index, counter);
    } else if (event.target === decreaseButton) {
      if (counter.value === 0) {
        alert("Numeri negativi non ammessi!");
      } else {
        counter.value = decreaseCounter(counter);
        updateStorage();
        updateCounter(index, counter);
      }
    } else if (event.target.closest("button") === deleteButton) {
      document.body.removeChild(mainContainer);
      counterList = counterList.filter((item) => item.id !== counter.id);
      updateStorage();
    } else if (event.target.closest("button") === restartButton) {
      index.textContent = resetCounter(counter);
      updateStorage();
      updateCounter(index, counter);
    }
  });
}

function saveCounter(counter) {
  counterList.push(counter);
  updateStorage();
}

function increaseCounter(counter) {
  return counter.value + 1;
}

function decreaseCounter(counter) {
  return counter.value - 1;
}

function resetCounter(counter) {
  return (counter.value = 0);
}

function updateCounter(index, counter) {
  index.textContent = counter.value;
}

function updateStorage() {
  localStorage.setItem("counters", JSON.stringify(counterList));
}
