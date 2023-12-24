// pages/aboutus/[id].js

import { useRouter } from 'next/router';

// Hardcoded developer details
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function AboutDeveloper() {
  const router = useRouter();
  const { id } = router.query;
  console.log('router.query:', router.query);

  // Check if id is available and a number
  const developerId = parseInt(id);
  const developer = details.find(dev => dev.id === developerId);
  console.log('developer:', developer);

  return (
    <div>
      {developer ? (
        <>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
}

export default AboutDeveloper;
