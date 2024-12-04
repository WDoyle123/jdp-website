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
  <div class="tax-return-left">
    <img src="static/tax-return.svg" alt="Payroll illustration" />
  </div>
  <div class="tax-return-right">
    <div class="payroll-heading">
    <h2>Tax Returns</h2>
    <p>Simplify your tax obligations and stay compliant.</p>
    </div>
    <div class="tax-return-text">
      <p>
        Completing your tax return can be a time-consuming and complex process. 
        Our experienced team is here to take the stress out of managing your annual 
        tax obligations. We work with small businesses across the UK to ensure 
        accurate and timely submissions, minimizing errors and avoiding penalties.
      </p>
      <p>
        Whether you’re a sole trader, limited company, or partnership, we’ll handle 
        everything from expense tracking to filing with HMRC. With up-to-date knowledge 
        of UK tax regulations, we ensure that you claim all eligible allowances and 
        deductions, helping you keep more of your hard-earned profits.
      </p>
  </div>
</div>
`;

const bookkeepingContent = `
  <div class="payroll-left">
    <div class="payroll-heading">
      <h2>Bookkeeping</h2>
      <p>Keep your business finances in perfect order.</p>
    </div>
    <div class="payroll-text">
      <p>
        Accurate bookkeeping is the backbone of any successful business. 
        Our dedicated team ensures your financial records are up-to-date, 
        organized, and compliant with HMRC regulations. By maintaining 
        accurate records, we help you make informed decisions and save time 
        when it comes to preparing your accounts or tax returns.
      </p>
      <p>
        With our support, you can focus on growing your business while we 
        take care of the numbers. Get in touch today to learn more about 
        our affordable and reliable bookkeeping services.
      </p>
    </div>
  </div>
  <div class="payroll-right">
    <img src="static/bookkeeper.svg" alt="Bookkeeping illustration" />
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
