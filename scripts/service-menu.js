const payroll = document.getElementById('payroll');
const taxation = document.getElementById('taxation');
const bookkeeping = document.getElementById('bookkeeping');
const vat = document.getElementById('vat');
const selfAssessment = document.getElementById('self-assessment');
const accounts = document.getElementById('accounts');
const content = document.getElementById('job-content');

const isActive = (element, htmlContent) => {
  element.addEventListener('click', () => {
    [payroll, taxation, bookkeeping, vat, selfAssessment, accounts].forEach(el => {
      el.style.backgroundColor = '';
      el.style.color = 'black';
    });

    element.style.backgroundColor = "#004225";
    element.style.color = 'white';

    content.innerHTML = htmlContent;
  });
};

isActive(payroll, '<p>Payroll</p>');
isActive(taxation, '<p>Tax Returns</p>');
isActive(bookkeeping, '<p>Bookkeeping</p>');
isActive(vat, '<p>VAT Returns</p>');
isActive(selfAssessment, '<p>Self Assessment</p>');
isActive(accounts, '<p>Accounts</p>');

