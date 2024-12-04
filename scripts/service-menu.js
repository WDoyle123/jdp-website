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

const payrollContent = `
  <div class="payroll-left">
    <div class="payroll-heading">
      <h2>Payroll</h2>
      <p>Manage employee payments efficiently.</p>
    </div>
    <div class="payroll-text">
      <p>
        We use the Sage payroll system. All of our team members are capable of
        running your payroll for you and fully understand the legal requirements
        for correct and trouble-free processing. With ever-changing legislation,
        the accurate running of PAYE has become a minefield for small businesses.
        You could use our payroll bureau services and allow us to take the
        responsibility for the accurate and timely payment of your staff.
      </p>
      <p>
        Pensions automatic enrolment. All new businesses have an instant duty to
        set up a suitable scheme and automatically enroll their staff.
      </p>
    </div>
  </div>
  <div class="payroll-right">
    <img src="static/people.svg" alt="Payroll illustration" />
  </div>
`;

const taxationContent = `
  <div>
    <h2>Tax Returns</h2>
    <p>Accurate and timely filing of your tax returns.</p>
  </div>
`;

const bookkeepingContent = `
  <div>
    <h2>Bookkeeping</h2>
    <p>Keep your financial records organized and up to date.</p>
  </div>
`;

const vatContent = `
  <div>
    <h2>VAT Returns</h2>
    <p>Comprehensive VAT return services for your business.</p>
  </div>
`;

const selfAssessmentContent = `
  <div>
    <h2>Self Assessment</h2>
    <p>Assistance with self-assessment tax returns.</p>
  </div>
`;

const accountsContent = `
  <div>
    <h2>Accounts</h2>
    <p>Professional account management services.</p>
  </div>
`;

payroll.classList.add("active");
payrollImg.classList.add("active-img");
content.innerHTML = payrollContent;

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

// Use constants in the isActive function
isActive(payroll, payrollContent);
isActive(taxation, taxationContent);
isActive(bookkeeping, bookkeepingContent);
isActive(vat, vatContent);
isActive(selfAssessment, selfAssessmentContent);
isActive(accounts, accountsContent);
