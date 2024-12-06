document.addEventListener("DOMContentLoaded", function () {
  const content = document.getElementById("job-content");

  const jobSections = [
    {
      id: "payroll",
      img: "payroll-img",
      content: `
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
    `,
    },
    {
      id: "taxation",
      img: "taxation-img",
      content: `
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
    `,
    },
    {
      id: "bookkeeping",
      img: "bookkeeping-img",
      content: `
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
    `,
    },
    {
      id: "vat",
      img: "vat-img",
      content: `
  <div class="payroll-left">
    <div class="payroll-heading">
      <h2>VAT Returns</h2>
      <p>Stay compliant and stress-free with our VAT services.</p>
    </div>
    <div class="payroll-text">
      <p>
        Managing VAT can be a complex and time-consuming process. 
        Our expert team simplifies VAT returns, ensuring your business 
        complies with HMRC requirements while avoiding costly errors 
        and penalties. 
      </p>
      <p>
        From accurate record-keeping to filing your VAT returns on time, 
        we handle the entire process for you. Whether you're on the 
        Flat Rate Scheme or Standard VAT, we've got you covered. 
        Focus on your business growth while we take care of the paperwork.
      </p>
      <p>
        Get in touch today for professional VAT support tailored to 
        your business needs.
      </p>
    </div>
  </div>
  <div class="payroll-right">
    <img src="static/vat-man.svg" alt="VAT Returns illustration" />
  </div>
`,
    },
    {
      id: "self-assessment",
      img: "self-assessment-img",
      content: `
  <div class="tax-return-left">
    <img src="static/self-assessment-man.svg" alt="Payroll illustration" />
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
`,
    },
    {
      id: "accounts",
      img: "accounts-img",
      content: `
  <div class="payroll-left">
    <div class="payroll-heading">
      <h2>Accounts</h2>
      <p>Small Business Accounting</p>
    </div>
    <div class="payroll-text">
      <p>
        Managing accounts is a critical part of running a business. 
        Our expert services ensure accurate bookkeeping, timely 
        submissions, and full compliance with UK regulations.
      </p> 
    </div>
  </div>
  <div class="payroll-right">
    <img src="static/accounts-man.svg" alt="VAT Returns illustration" />
  </div>
`,
    },
  ];

  jobSections.forEach(({ id, img, content: htmlContent }) => {
    const navItem = document.getElementById(id);
    const navImg = document.getElementById(img);

    navItem.addEventListener("click", () => {
      jobSections.forEach(({ id: otherId, img: otherImg }) => {
        document.getElementById(otherId).classList.remove("active");
        document.getElementById(otherImg).classList.remove("active-img");
      });

      navItem.classList.add("active");
      navImg.classList.add("active-img");
      content.innerHTML = htmlContent;
    });
  });

  document.getElementById(jobSections[0].id).click();
});
