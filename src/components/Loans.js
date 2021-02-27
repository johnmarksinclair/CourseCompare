const Loans = () => {
  const LoanButton = (props) => {
    return (
      <div className="listdiv">
        <div className="btndiv">
          <div className="row">
            <div className="col-sm-12 col-md-2">
              <div className="title">{props.bank}</div>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border--500 blue rounded-lg inline-block"
                onClick={() => window.open(props.link)}
              >
                Visit Website
              </button>
            </div>
            <div className="col">
              <div>{props.descript}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const loan1 = {
    bank: "Bank Of Ireland",
    link:
      "https://personalbanking.bankofireland.com/borrow/loans/student-loans/postgraduate-finance-loan/features-benefits/",
    descript:
      "Discounted variable rate of 5.6% Annual Percentage Rate (APR). Flexible repayment options – choose to repay weekly, fortnightly or monthly. Choose to repay your loan over 1 to 5 years. Maximum loan amount of €14,000. Option to defer the first 12 months repayments only (optional, only if repaid monthly).",
  };

  const loan2 = {
    bank: "Allied Irish Banks",
    link: "https://aib.ie/our-products/loans/education-loans",
    descript:
      "Competitive interest rate for new loans at 8.15%, APR (Annual Percentage Rate) of 8.45%, subject to variation Loan terms from one to five years. You make repayments on the loan every month which are made up of the amount you borrowed plus interest. You can make extra payments at any time with no penalty. We may need a parent or guardian to guarantee the loan.",
  };

  return (
    <div className="flexauto flexcol">
      <div className="loanspagetitile">
        <h1>Loan Information</h1>
      </div>

      <div className="loanlist">
        <div>{LoanButton(loan1)}</div>
        <div>{LoanButton(loan2)}</div>
      </div>
    </div>
  );
};

export default Loans;
