import { attributes, react as HomeContent } from "../content/about.md";

export default function About() {
  let { title, company, people } = attributes;
  return (
    <>
      <div>
        <h1>{title}</h1>
        <h3>{company}</h3>
        <hr />
        <HomeContent />
        <ul>
          {people.map((person, i) => (
            <li>
              <p>{person.name}</p>
              <p>{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
