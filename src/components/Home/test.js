import React from "react";

const test = () => {
  const getValue = (firstName, lastName) => {

    //IN MY (firstName, lastname)
    //the reason why i am not saying Ajibola or olayemi is because i use a renaiming process so if i console log firstName, it gives me ajibola because when i did my onclick function getValue()  insid the bracket, i am passing an arguement inside it



    console.log(firstName);
    console.log(lastName);
  };

  return (
    <div>
      <button onClick={(e) => getValue("Ajibola", "Olayemi")}>
        PASSING THE VALUES
      </button>
    </div>
  );
};

export default test;
