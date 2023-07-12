function Book({ title, author, image, index }) {
  return (
    <article className="book">
      <div className="number">#{index + 1}</div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

export default Book
