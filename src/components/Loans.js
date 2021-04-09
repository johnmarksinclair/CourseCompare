import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import SignIn from "./SignIn";
import aib from "../assets/aib.png";
import boi from "../assets/boi.png";
import ptsb from "../assets/ptsb.png";
import ub from "../assets/ub.png";

const Loans = () => {
  const user = useContext(UserContext);
  const LoanButton = (loan) => {
    return (
      <div className="shadow-lg rounded-xl overflow-hidden max-w-full h-full hover:bg-gray-100">
        <img
          className="object-cover object-center w-full max-h-60"
          src={loan.imgLink}
          alt="bankLogo"
        ></img>
        <div className="p-10 h-full">
          <h1 className="text-3xl uppercase">{loan.bank}</h1>
          <p className="text-sm text-gray-500">{loan.descript}</p>
          <div className="pt-2 flex justify-center">
            <div>
              <button
                className="homebtn bump"
                onClick={() => window.open(loan.link)}
              >
                Learn More
              </button>
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
    imgLink:
      boi
  };

  const loan2 = {
    bank: "Allied Irish Banks",
    link: "https://aib.ie/our-products/loans/education-loans",
    descript:
      "Competitive interest rate for new loans at 8.15%, APR (Annual Percentage Rate) of 8.45%, subject to variation Loan terms from one to five years. You make repayments on the loan every month which are made up of the amount you borrowed plus interest. You can make extra payments at any time with no penalty. We may need a parent or guardian to guarantee the loan.",
    imgLink:
      aib
  };

  const loan3 = {
    bank: "Ulster Bank",
    link: "https://digital.ulsterbank.ie/personal/personal-loans.html",
    descript:
      "Borrow between €2,500 and €75,000. Borrow for almost any purpose. Monthly repayments with no upfront fees or charges. Apply online.",
    imgLink:
      ub
  };

  const loan4 = {
    bank: "Permanent TSB",
    link: "https://www.permanenttsb.ie/borrowing/loans/personal-loan/",
    descript:
      "Approval online or in-app in minutes for loans from €1,500 up to €25,000. If approved you can get your loan paid into your account instantly. Competitive rates.",
    imgLink:
      ptsb
  };

  return (
    <div>
      {user ? (
        <div className="px-12 py-4 text-gray-700">
          <div className="pb-3 flex justify-center md:justify-start">
            <h1 className="font-semibold text-3xl">Loan Information</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            <div>{LoanButton(loan1)}</div>
            <div>{LoanButton(loan2)}</div>
            <div>{LoanButton(loan3)}</div>
            <div>{LoanButton(loan4)}</div>
          </div>
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Loans;
