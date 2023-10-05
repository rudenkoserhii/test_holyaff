// --- Console --- //

document
  .querySelectorAll("#survey_button")
  .forEach((btn) => btn.addEventListener("click", (e) => writeAnswer(e)));

document.querySelector("#p_modal_button3").addEventListener("click", () => {
  console.log(answers);
});

let answers = [];

function writeAnswer(e) {
  const answer = e.currentTarget.children[0].children[0].innerText;
  const questionNumber =
    e.currentTarget.parentNode.children[0].children[0].children[0].innerText;
  const question =
    e.currentTarget.parentNode.children[0].children[1].children[0].innerText;

  answers.push(`${questionNumber} - ${question} - ${answer}`);
}

// --- Comments --- //

document.querySelector("#formLeaveComment").addEventListener("submit", (e) => {
  e.preventDefault();
  addComment(e.currentTarget[0].value);
  e.currentTarget.reset();
});

function addComment(comment) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("comments");
  newDiv.id = "commentAnonimous";
  newDiv.style.display = "block";
  newDiv.innerHTML = `<div class="profile"><img src="assets/images/avatars/anonimous.jpg"></div><div class="comment-content"><p class="name"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anônimo</font></font></p><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${comment}</font></font></p></div><div class="clr"></div><div class="comment-status"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Curte·comente</font></font><img src="/assets/images/common/like.png" width="15px" height="15px"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></span><small><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">·</font></font><u><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0 minutos antes</font></font></u></small></div>`;
  document
    .getElementById("comment0")
    .insertAdjacentElement("beforebegin", newDiv);
}
