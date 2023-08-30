import React from "react";
import { accordionData } from "./utils/content";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }, idx) => {
          return <Accordion title={title} content={content} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default App;
