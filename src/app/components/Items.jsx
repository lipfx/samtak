

export default function Items({title, description, cost,}) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{cost}</p>
    </header>
  );
}