import React from "react";

function CorrectBanner({ noOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {noOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}

export default CorrectBanner;
