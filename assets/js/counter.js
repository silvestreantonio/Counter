const insertBtn = document.getElementById("insertCounter-btn");

const infoContainer = document.createElement("div");
infoContainer.classList =
  "hidden flex-col items-center justify-center gap-5 rounded-3xl bg-white/40 p-6 mx-6 text-center shadow-lg dark:bg-white/10";

const label = document.createElement("label");
label.classList = "dark:text-white";
label.textContent = "Inserisci il titolo del contatore che vuoi creare:";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "es. Allenamenti");
input.classList =
  "w-full max-w-sm rounded-full bg-white px-5 py-3 text-center text-base text-gray-900 outline-none focus:ring-2 focus:ring-blue-400";

const createButton = document.createElement("button");
createButton.classList =
  "rounded-full bg-blue-400 px-8 py-3 font-semibold text-gray-900 shadow-md transition duration-200 hover:-translate-y-1 hover:bg-blue-500 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700";
createButton.textContent = "Crea contatore";

infoContainer.append(label, input, createButton);
document.body.appendChild(infoContainer);

let counterList = [];
if (localStorage.getItem("counters")) {
  counterList = JSON.parse(localStorage.getItem("counters"));
  counterList.forEach((counter) => {
    creaCounter(counter);
  });
}

insertBtn.addEventListener("click", function () {
  infoContainer.classList.remove("hidden");
  infoContainer.classList.add("flex");
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
      infoContainer.classList.remove("flex");
      input.value = "";
    }
  }
});

function creaCounter(counter) {
  const mainContainer = document.createElement("div");
  mainContainer.classList =
    "flex w-[90%] max-w-2xl flex-col items-center gap-6 rounded-3xl bg-white/40 p-6 mx-auto shadow-lg dark:bg-white/10 dark:text-white";

  const titleContainer = document.createElement("div");
  titleContainer.classList = "flex w-full items-center justify-between gap-4";

  const restartButton = document.createElement("button");
  restartButton.classList =
    "shrink-0 rounded-full bg-white/50 p-3 transition duration-200 hover:bg-white/80 dark:bg-white/10 dark:hover:bg-white/20";
  restartButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>`;

  const title = document.createElement("h2");
  title.classList =
    "min-w-0 flex-1 wrap-anywhere text-center text-2xl font-bold tracking-tight sm:text-3xl";
  title.textContent = counter.title;

  const deleteButton = document.createElement("button");
  deleteButton.classList =
    "shrink-0 rounded-full bg-white/50 p-3 text-red-500 transition duration-200 hover:bg-red-100 dark:bg-white/10 dark:hover:bg-red-900/30";
  deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>`;

  const counterContainer = document.createElement("div");
  counterContainer.classList = "flex w-full items-center justify-between gap-4";

  const decreaseButton = document.createElement("button");
  decreaseButton.classList =
    "grid size-14 shrink-0 place-items-center rounded-full bg-red-300 text-3xl font-semibold leading-none text-red-900 transition duration-200 hover:bg-red-400 dark:bg-red-800 dark:text-white dark:hover:bg-red-700";
  decreaseButton.innerHTML = '<span class="block -translate-y-px">−</span>';

  const index = document.createElement("span");
  index.classList =
    "min-w-0 flex-1 wrap-anywhere text-center text-5xl font-bold tabular-nums sm:text-6xl";
  index.textContent = counter.value;

  const increaseButton = document.createElement("button");
  increaseButton.classList =
    "grid size-14 shrink-0 place-items-center rounded-full bg-blue-400 text-3xl font-semibold leading-none text-gray-900 transition duration-200 hover:bg-blue-500 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700";
  increaseButton.innerHTML = '<span class="block -translate-y-px">+</span>';

  titleContainer.append(restartButton, title, deleteButton);
  counterContainer.append(decreaseButton, index, increaseButton);
  mainContainer.append(titleContainer, counterContainer);
  document.body.appendChild(mainContainer);

  mainContainer.addEventListener("click", (event) => {
    if (event.target.closest("button") === increaseButton) {
      counter.value = increaseCounter(counter);
      updateStorage();
      updateCounter(index, counter);
    } else if (event.target.closest("button") === decreaseButton) {
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
