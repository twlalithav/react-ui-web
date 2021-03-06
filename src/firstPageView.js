import React from "react";
import PropTypes from "prop-types";

function Page({ payments }) {
  if (payments.payments && payments.payments.length > 0) {
    let map1 = payments.payments.map((payment, index) => (
      <p key={index}>Beneficiary : {payment.beneficiaryName}</p>
    ));
    return <React.Fragment>{map1}</React.Fragment>;
  }
  return (
    <React.Fragment>
      <p>No payments found</p>
    </React.Fragment>
  );
}

Page.propTypes = {
  payments: PropTypes.shape({
    payments: PropTypes.array,
  }),
};

Page.defaultProps = {
  payments: {
    payments: [],
  },
};

export default Page;
