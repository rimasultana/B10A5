//togle buttone word
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-primary");
  donationBtn.classList.remove("bg-primary");
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("donation").classList.add("hidden");
});
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("bg-primary");
  historyBtn.classList.remove("bg-primary");
  document.getElementById("history").classList.add("hidden");
  document.getElementById("donation").classList.remove("hidden");
});
// togole button word end
//! card word start
// card one
document.getElementById("cardOneBtn").addEventListener("click", function () {
  const inputField = getInputValu("cardOneInput");
  const title = getInnerText("cardOneTitle");
  const regex = /^[0-9]+$/;
  if (!regex.test(inputField)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  const cardAmount = getInnerText("cardOneTk", true);
  document.getElementById("cardOneTk").innerText =
    cardAmount + parseFloat(inputField);
  const amount = getInnerText("amount", true);

  if (parseInt(inputField) <= amount) {
    const sum = amount - parseFloat(inputField);
    document.getElementById("amount").innerText = sum;
    document.getElementById("cardOneInput").value = "";
    genarateHtml(parseFloat(inputField), title);
    Swal.fire({
      title: "<strong>Congrates!!</strong>",
      html: `
      <div class="flex mb-10 justify-center items-center ">
      <img src="https://raw.githubusercontent.com/rimasultana/B10A5/refs/heads/main/images/coin.png" />
      </div>
      You have successfully donated ${parseFloat(inputField)} BDT.
      <h class="text-3xl"><strong>Seccessfully</strong></h>
    `,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Close Confirmation!
    `,
    });
  } else {
    return alert("Please provide small amount in your main balance");
  }
});
//card two
document.getElementById("cardTwoBtn").addEventListener("click", function () {
  const inputField = getInputValu("cardTwoInput");
  const title = getInnerText("cardTwoTitle");
  const regex = /^[0-9]+$/;
  if (!regex.test(inputField)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  const cardAmount = getInnerText("cardTwoTk", true);
  document.getElementById("cardTwoTk").innerText =
    cardAmount + parseFloat(inputField);
  const amount = getInnerText("amount", true);

  if (parseInt(inputField) <= amount) {
    const sum = amount - parseFloat(inputField);
    document.getElementById("amount").innerText = sum;
    document.getElementById("cardTwoInput").value = "";
    genarateHtml(parseFloat(inputField), title);
    Swal.fire({
      title: "<strong>Congrates!!</strong>",
      html: `
      <div class="flex mb-10 justify-center items-center ">
      <img src="https://raw.githubusercontent.com/rimasultana/B10A5/refs/heads/main/images/coin.png" />
      </div>
      You have successfully donated ${parseFloat(inputField)} BDT.
      <h class="text-3xl"><strong>Seccessfully</strong></h>
    `,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Close Confirmation!
    `,
    });
  } else {
    return alert("Please provide small amount in your main balance");
  }
});
//card three
document.getElementById("cardThreeBtn").addEventListener("click", function () {
  const inputField = getInputValu("cardThreeInput");
  const title = getInnerText("cardThreeTitle");
  const regex = /^[0-9]+$/;
  if (!regex.test(inputField)) {
    return alert("Please enter a valid numeric donation amount.");
  }

  const cardAmount = getInnerText("cardThreeTk", true);
  document.getElementById("cardThreeTk").innerText =
    cardAmount + parseFloat(inputField);
  const amount = getInnerText("amount", true);

  if (parseInt(inputField) <= amount) {
    const sum = amount - parseFloat(inputField);
    document.getElementById("amount").innerText = sum;
    document.getElementById("cardThreeInput").value = "";
    genarateHtml(parseFloat(inputField), title);
    Swal.fire({
      title: "<strong>Congrates!!</strong>",
      html: `
      <div class="flex mb-10 justify-center items-center ">
      <img src="https://raw.githubusercontent.com/rimasultana/B10A5/refs/heads/main/images/coin.png" />
      </div>
      You have successfully donated ${parseFloat(inputField)} BDT.
      <h class="text-3xl"><strong>Seccessfully</strong></h>
    `,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Close Confirmation!
    `,
    });
  } else {
    return alert("Please provide small amount in your main balance");
  }
});

//reusable function
function getInnerText(id, number = false) {
  if (number) {
    const text = document.getElementById(id).innerText;
    return parseFloat(text);
  }
  const text = document.getElementById(id).innerText;
  return text;
}
function getInputValu(id, number = false) {
  if (number) {
    const text = document.getElementById(id).value;
    return parseFloat(text);
  }
  const values = document.getElementById(id).value;
  return values;
}
function genarateHtml(amount, title) {
  const sectionCaontainer = document.getElementById("history");
  const date = new Date();
  const createDiv = document.createElement("div");
  createDiv.innerHTML = `
    <div class="border-2 my-3 px-3 rounded-md py-7 border-gray-100">
          <h1 class="text-3xl">${amount} ${title}</h1>
          <p class="text-2xl ps-3">Date: ${date.toString()}</p>
        </div>
    `;
  sectionCaontainer.appendChild(createDiv);
}
