// pages/aboutus/index.js

import Link from 'next/link';
// import { details } from './data'; // Correct import path

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ];
function AboutUs() {
    console.log(details);


  return (
    <div>
      <h1>Developers List</h1>
      <ul>
        {details.map(developer => (
          <li key={developer.id}>
            <Link href={`/about/${developer.id}`}>
              <a>{developer.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;
