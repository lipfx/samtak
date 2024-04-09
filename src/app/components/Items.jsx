

export default function Items({title, description, detail, cost, available,}) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{detail}</p>
      <p>{cost}</p>
      <p>{available}</p>
    </header>
  );
}