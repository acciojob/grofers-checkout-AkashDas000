const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((p) => {
    total += parseFloat(p.textContent);
  });

  // Check if #ans already exists (avoid duplicates)
  let ansCell = document.querySelector("#ans");
  if (!ansCell) {
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    ansCell = document.createElement("td");
    ansCell.id = "ans"; // ✅ needed for Cypress test
    ansCell.setAttribute("colspan", "2");
    newRow.appendChild(ansCell);
    table.appendChild(newRow);
  }

  ansCell.textContent = `Total Price = Rs ${total}`;


  
};

getSumBtn.addEventListener("click", getSum);

