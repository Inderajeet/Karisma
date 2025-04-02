import React, { useEffect, useState } from 'react';
import DynamicBanner from '../components/DynamicBanner';
import { useTranslation } from 'react-i18next';

export default function Careers() {
  const { t, i18n } = useTranslation('career');
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('/api/career')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.career) {
          setCareerData(data.career);
        } else {
          setError('Failed to load career data.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching career data:', err);
        setError('Failed to load career data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading career information...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!careerData) {
    return <p>Career data not found.</p>;
  }

  return (
    <>
      <DynamicBanner
        deptName={careerData.deptName}
        bannerImage={careerData.bannerImage}
        bannerPosition={careerData.bannerPosition}
        home={careerData.home}
      />
      <div style={{ margin: '10rem 0' }}></div>
      <div
        className="line-container"
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          paddingTop: '10px',
        }}
      >
        <hr
          className="half-line"
          style={{ width: '50%', border: '0', height: '3px', backgroundColor: '#111', margin: '0' }}
        />
      </div>
    </>
  );
}