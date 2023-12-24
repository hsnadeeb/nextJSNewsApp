// pages/about/[id].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import { details } from './data'; // Import the hardcoded developer details


const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];
function AboutDeveloper() {
  const router = useRouter();
  const { id } = router.query;
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    // Check if router.query is not empty and id is a number
    if (router.query && router.query.id) {
      const developerId = parseInt(router.query.id);
      const foundDeveloper = details.find(dev => dev.id === developerId);
      setDeveloper(foundDeveloper);
    }
  }, [router.query]);

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
