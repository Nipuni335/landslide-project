export default function AddNewsPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Add News</h1>

      <form>
        <input type="text" placeholder="News Title" />
        <br /><br />
        <textarea placeholder="News Description"></textarea>
        <br /><br />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}
