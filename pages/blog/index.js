import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function index({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.frontmatter.title}>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h2>{post.frontmatter.title}</h2>
            </a>
          </Link>
          <p>{post.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
}
