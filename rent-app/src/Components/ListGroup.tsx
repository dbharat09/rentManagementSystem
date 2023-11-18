import { MouseEvent, useState } from "react";

function ListGroup() {
  let names = ["bharat", "chaitanya", "chandana", "sreya", "renuka"];
  let [nameSelectedIndex, setNameSelectedIndex] = useState(-1);

  const updateStateAndLog = (index: any) => {
    console.log(index);
    setNameSelectedIndex(index);
  };
  const getNameList = () => {
    return names.length === 0 ? (
      <p>No item Found</p>
    ) : (
      names.map((name, index) => (
        <li
          className={
            nameSelectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={name}
          onClick={() => {
            updateStateAndLog(index);
            console.log(name);
          }}
        >
          {name}
        </li>
      ))
    );
  };

  return (
    <>
      <h1>Names</h1>
      <ul className="list-group">{getNameList()}</ul>
    </>
  );
}

export default ListGroup;
