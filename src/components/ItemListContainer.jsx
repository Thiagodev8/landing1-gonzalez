import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <p>Muy pronto vas a poder ver todos nuestros productos aquí.</p>
    </div>
  );
}

export default ItemListContainer;

