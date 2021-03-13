const Loans = () => {
  const LoanButton = (loan) => {
    return (
  <div className="shadow-lg rounded-xl overflow-hidden max-w-full hover:bg-gray-100">
      <img className="object-cover object-center w-full max-h-48" src={loan.imgLink} alt="bankLogo"></img>
    <div className="flex p-10">
      <div className="mb-auto mt-auto max-w-lg">
        <h1 className="text-3xl uppercase">{loan.bank}</h1>
        <p className="text-sm text-gray-500">{loan.descript}</p>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border--500 blue rounded-lg inline-block"
          onClick={() => window.open(loan.link)}
        >Learn More
        </button>
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
    imgLink:
      "https://yt3.ggpht.com/-pjfLA95zsVE/AAAAAAAAAAI/AAAAAAAAAAA/iSoLPl32Udw/s900-c-k-no/photo.jpg"
  };

  const loan2 = {
    bank: "Allied Irish Banks",
    link: "https://aib.ie/our-products/loans/education-loans",
    descript:
      "Competitive interest rate for new loans at 8.15%, APR (Annual Percentage Rate) of 8.45%, subject to variation Loan terms from one to five years. You make repayments on the loan every month which are made up of the amount you borrowed plus interest. You can make extra payments at any time with no penalty. We may need a parent or guardian to guarantee the loan.",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Allied_Irish_Banks_logo.svg/220px-Allied_Irish_Banks_logo.svg.png"
  };

  const loan3 = {
    bank: "Ulster Bank",
    link:
      "https://digital.ulsterbank.ie/personal/personal-loans.html",
    descript:
      "Borrow between €2,500 and €75,000. Borrow for almost any purpose. Monthly repayments with no upfront fees or charges. Apply online.",
    imgLink:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.northernsound.ie%2Fwp-content%2Fuploads%2Fsites%2F20%2FUlster-Bank-534x462.jpeg&f=1&nofb=1"
  };

  const loan4 = {
    bank: "Permanent TSB",
    link:
      "https://www.permanenttsb.ie/borrowing/loans/personal-loan/",
    descript:
      "Approval online or in-app in minutes for loans from €1,500 up to €25,000. If approved you can get your loan paid into your account instantly. Competitive rates.",
    imgLink:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.central.ie%2Fmedia%2Fimages%2Fp%2FPermanentTSBLogo_large.jpg&f=1&nofb=1"
  };
  return (
    <div className="m-2">
      <div className="mx-12 mb-8 object-center">
        <h1 className="text-5xl font-semibold">Loan Information</h1>
      </div>

      <div className="mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>{LoanButton(loan1)}</div>
        <div>{LoanButton(loan2)}</div>
        <div>{LoanButton(loan3)}</div>
        <div>{LoanButton(loan4)}</div>
      </div>
    </div>
  );
};

export default Loans;
