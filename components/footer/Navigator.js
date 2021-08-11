import Link from 'next/link'

export default function Navigator({ data }) {
  const newest = data.slice(0, 5);
  const random = data.slice(0, 5);
  return (
    <div className="navigator">
        <div className="column">
        <p>Random Posts</p>
        {random.map(({ title,id }) => (
          <Link href={`/posts/${id}`} key={id}>{title}</Link>
          ))}
        </div>
        <div className="column">
          <p>Newest Posts</p>
      {newest.map(({ title,id }) => (
          <Link href={`/posts/${id}`} key={id}>{title}</Link>
          ))}
        </div>
    </div>
  );
}
