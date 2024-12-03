const payroll = document.getElementById("payroll");
const taxation = document.getElementById("taxation");
const bookkeeping = document.getElementById("bookkeeping");
const vat = document.getElementById("vat");
const selfAssessment = document.getElementById("self-assessment");
const accounts = document.getElementById("accounts");
const content = document.getElementById("job-content");

const payrollImg = document.getElementById("payroll-img");
const taxationImg = document.getElementById("taxation-img");
const bookkeepingImg = document.getElementById("bookkeeping-img");
const vatImg = document.getElementById("vat-img");
const selfAssessmentImg = document.getElementById("self-assessment-img");
const accountsImg = document.getElementById("accounts-img");

const jobNavItems = [
  payroll,
  taxation,
  bookkeeping,
  vat,
  selfAssessment,
  accounts,
];

const elementToImgMap = {
  payroll: payrollImg,
  taxation: taxationImg,
  bookkeeping: bookkeepingImg,
  vat: vatImg,
  "self-assessment": selfAssessmentImg,
  accounts: accountsImg,
};

const isActive = (element, htmlContent) => {
  element.addEventListener("click", () => {
    jobNavItems.forEach((el) => el.classList.remove("active"));
    Object.values(elementToImgMap).forEach((img) =>
      img.classList.remove("active-img"),
    );

    element.classList.add("active");
    const correspondingImg = elementToImgMap[element.id];
    if (correspondingImg) {
      correspondingImg.classList.add("active-img");
    }

    content.innerHTML = htmlContent;
  });
};

isActive(payroll, "<p>Payroll</p>");
isActive(taxation, "<p>Tax Returns</p>");
isActive(bookkeeping, "<p>Bookkeeping</p>");
isActive(vat, "<p>VAT Returns</p>");
isActive(selfAssessment, "<p>Self Assessment</p>");
isActive(accounts, "<p>Accounts</p>");
