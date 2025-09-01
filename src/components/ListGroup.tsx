import { MouseEvent, useState } from "react";

function ListGroup() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  let list: any = [
    "An Item",
    "Two Items",
    "Three Items",
    "Four Items",
    "Five Items",
  ];

  const handleClick = (index: number) => setSelectedItem(index);
  return (
    <>
      <h1 className="text-3xl font-semibold">List</h1>
      {list.length === 0 && <p>List is Empty</p>}
      <ul className="mt-2 divide-y divide-gray-200 border border-gray-200 rounded-lg cursor-pointer w-max ">
        {list.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            className={`p-3 cursor-pointer
                        ${selectedItem === index ? "bg-amber-200" : ""}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
