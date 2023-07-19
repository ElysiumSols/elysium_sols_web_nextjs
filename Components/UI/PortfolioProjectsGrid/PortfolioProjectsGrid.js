// React Import
import React from "react";

// Component Import
import PortfolioCard from "../PortfolioCard/PortfolioCard";

const PortfolioProjectsGrid = ({ data }) => {
  return (
    <div className={`w-full mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-3`}>
      {data.map((item) => (
        <PortfolioCard key={item.id} content={item} />
      ))}
    </div>
  );
};

export default PortfolioProjectsGrid;
