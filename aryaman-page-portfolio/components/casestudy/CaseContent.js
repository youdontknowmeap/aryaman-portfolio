import React from "react";

const CaseContent = ({ children }) => {
  return (
    <div className="max-w-[800px] mx-auto px-5 md:px-10 py-16 md:py-24">
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="w-full h-[1px] bg-[#242424] my-16 md:my-24" />}
          <div className="case-content-block">{child}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CaseContent;
