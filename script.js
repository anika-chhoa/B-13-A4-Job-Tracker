const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobCount = document.getElementById("job-count");

const cardContainer = document.querySelector(".card-container");
const filteredSection = document.querySelector(".filteredSection");

let interviewList = [];
let rejectedList = [];
let currentStatus = "allBtn";

function calculate() {
  totalCount.innerText = cardContainer.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  jobCount.innerText = cardContainer.children.length;
}
calculate();

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function toggleBtn(id) {
  currentStatus = id;
  allBtn.classList.remove("bg-[#3b82f6FF]", "text-white");
  interviewBtn.classList.remove("bg-[#3b82f6FF]", "text-white");
  rejectedBtn.classList.remove("bg-[#3b82f6FF]", "text-white");

  allBtn.classList.add("bg-white", "text-gray-500", "border-gray-100");
  interviewBtn.classList.add("bg-white", "text-gray-500", "border-gray-100");
  rejectedBtn.classList.add("bg-white", "text-gray-500", "border-gray-100");

  let selected = document.getElementById(id);

  selected.classList.remove("bg-white", "text-gray-500", "border-gray-100");
  selected.classList.add("bg-[#3b82f6FF]", "text-white");

  if (id === "all-btn") {
    cardContainer.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id === "interview-btn") {
    filteredSection.classList.remove("hidden");
    cardContainer.classList.add("hidden");
    renderInterview();
  } else if (id === "rejected-btn") {
    filteredSection.classList.remove("hidden");
    cardContainer.classList.add("hidden");
    
  }
}

document.querySelector(".main").addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-card-interview")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;

    const cardTitle = parentNode.querySelector(".card-title").innerText;
    const cardSubTitle = parentNode.querySelector(".card-sub-title").innerText;
    const jobDescription =
      parentNode.querySelector(".job-description").innerText;
    const btnStatus = parentNode.querySelector(".btn-status");
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const btnCardInterview = parentNode.querySelector(".btn-card-interview");
    const btnCardRejected = parentNode.querySelector(".btn-card-rejected");
    const deleteBtn = parentNode.querySelector(".delete-btn");

    btnStatus.innerText = "INTERVIEW";
    btnStatus.classList.remove("btn-primary", "btn-soft", "text-black");
    btnStatus.classList.add("btn-outline", "btn-success");

    let cardInfo = {
      cardTitle,
      cardSubTitle,
      jobDescription,
      btnStatus: "INTERVIEW",
      jobDetails,
    };

    let existing = interviewList.find(
      (item) => item.cardTitle === cardInfo.cardTitle,
    );

    if (!existing) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.cardTitle !== cardInfo.cardTitle,
    );

    if (currentStatus === "rejected-btn") {
      renderRejected();
    }

    calculate();
  } 
});

function renderInterview() {
  filteredSection.innerHTML = "";

  for (let interview of interviewList) {
    let statusClass = "";

    if (interview.btnStatus === "INTERVIEW") {
      statusClass = "btn-outline btn-success";
    } else {
      statusClass = "btn-primary btn-soft text-black";
    }

    let newDiv = document.createElement("div");
    newDiv.classList.add(
      "w-full",
      "bg-white",
      "p-6",
      "border-2",
      "border-[#f1f2f4FF]",
      "rounded-lg",
      "flex",
      "justify-between",
    );

    newDiv.innerHTML = `
    <div class="card-left space-y-5">
            <div class="card-title-container">
              <h1 class="card-title text-lg font-[600] text-[#002c5cFF]">
                ${interview.cardTitle}
              </h1>
              <h3 class="card-sub-title text-gray-500">
                ${interview.cardSubTitle}
              </h3>
            </div>
            <p class="job-description text-sm text-gray-500">
              ${interview.jobDescription}
            </p>
            <div class="job-status">
              <button
                class="btn-status text-sm font-medium btn ${statusClass}"
              >
                ${interview.btnStatus}
              </button>
              <p class="job-details text-sm font-normal text-gray-500 mt-2">
                ${interview.jobDetails}
              </p>
            </div>
            <div class="card-btn-container space-x-2">
              <button class="btn-card-interview btn btn-outline btn-success">
                INTERVIEW
              </button>
              <button class="btn-card-rejected btn btn-outline btn-error">
                REJECTED
              </button>
            </div>
          </div>
          <div class="card-right">
            <button class="delete-btn btn btn-circle bg-white">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filteredSection.appendChild(newDiv);
  }
}


