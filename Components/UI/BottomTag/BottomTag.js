// React Import
import React from 'react';

const BottomTag = () => {
  return (
    <div className={`w-full px-1 z-20 bottom-0`}>
      <div
        className={`mx-auto py-1 px-3 w-full text-xs text-white font-light flex flex-wrap flex-row
                    md:justify-between justify-around items-center lg:max-w-6xl md:max-w-4xl max-w-full`}
      >
        <span>Copyrights 2022 © ElysiumSols</span>
        <span>Made with ❤️ by ElysiumSols</span>
      </div>
    </div>
  );
};

export default BottomTag;
