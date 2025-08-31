function ListGroup() {
  let list: any = [
    "An Item",
    "Two Items",
    "Three Items",
    "Four Items",
    "Five Items",
  ];

  return <>{list.length === 0 && list.map((i) => <li key={i}>{i}</li>)}</>;
}

export default ListGroup;
