
const form = document.getElementById("feedbackForm");
const feedbackBox = document.getElementById("allFeedbacks");

function showFeedbacks() {
  const data = JSON.parse(localStorage.getItem("feedbackList")) || [];
  feedbackBox.innerHTML = "<h3>نظرات ثبت‌شده:</h3>" + data.map(f => <p>${f}</p>).join("");
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const selected = document.querySelector('input[name="feedback"]:checked');
  if (!selected) return alert("لطفاً یک گزینه انتخاب کنید");

  const feedback = selected.value;
  let feedbacks = JSON.parse(localStorage.getItem("feedbackList")) || [];
  feedbacks.push(feedback);
  localStorage.setItem("feedbackList", JSON.stringify(feedbacks));
  showFeedbacks();
  form.reset();
});

showFeedbacks();
