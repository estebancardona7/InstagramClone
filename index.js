//Swipper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//Like buttom
function liked() {
  const like = document.querySelector(".like");
  if (like.src.match("like.png")) {
    like.setAttribute("class", "heartbeat red-heart");
    like.src = "./assets/like2.png";
    document.querySelector(".likes").innerHTML = "1,235 likes";
    setTimeout(() => {
      like.setAttribute("class", "icon like");
    }, 700);
  } else {
    like.src = "./assets/like.png";
    document.querySelector(".likes").innerHTML = "1,234 likes";
  }
}
//Comment box
function comment() {
  document.querySelector(".comment-box").focus();
}

const submitBtn = document.querySelector(".comment-btn");
const commText = document.querySelector("#comment");
const commentContainer = document.querySelector(".comments");

submitBtn.addEventListener("click", () => {
  if (commText.value !== "") {
    post();
  }
});

function post(e) {
  const commentText = commText.value;
  const div = document.createElement("div");
  div.classList = "comments";
  commentContainer.style.display = "";
  div.innerHTML = `<div>
  <span>
  <p><b>Comment</b> ${commentText}</p>
  </div>
  </span>
  `;
  commentContainer.insertAdjacentElement("beforeend", div);
  commText.value = "";
}

//Submitting with Enter key
commText.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13 && commText.value !== "") {
    // console.log("Enter pressed");
    submitBtn.click();
  }
});

//Fetching Images

let randomNum = Math.floor(Math.random() * 100);
const ImagesAPI = async function loadImages(url) {
  try {
    let res = await fetch("https://picsum.photos/v2/list?page=2&limit=100"),
      json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    document.getElementById("img-1").src = `${json[0].download_url}`;
    document.getElementById("img-2").src = `${json[1].download_url}`;
    document.getElementById("img-3").src = `${json[3].download_url}`;
    document.getElementById("img-4").src = `${json[4].download_url}`;
  } catch (err) {
    console.log("An error occurred");
  }
};
ImagesAPI();
