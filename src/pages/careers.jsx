import React, { useEffect, useState } from 'react';
import DynamicBanner from '../components/DynamicBanner';
import { useTranslation } from 'react-i18next';
import Accordion from '../components/Accordian';
import CareerForm from '../components/CareerForm';

export default function Careers() {
  const { t, i18n } = useTranslation(['career', 'forms']);
  const [showCareerForm, setShowCareerForm] = useState(false);
  const [careerData, setCareerData] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch banner data from careerpage API
    fetch('https://demo.karismamc.com/api/careerpage')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && data.career) {
          setCareerData(data.career);
        } else {
          setError('Failed to load career banner data.');
        }
      })
      .catch((err) => {
        console.error('Error fetching career banner data:', err);
        setError('Failed to load career banner data.');
      });

    // Fetch jobs data from careers API
    fetch('https://demo.karismamc.com/api/careers')
      .then((res) => res.json())
      .then((jobsData) => {
        if (Array.isArray(jobsData)) {
          setJobs(jobsData);
        } else {
          setError('Failed to load job listings.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching job listings:', err);
        setError('Failed to load job listings.');
        setLoading(false);
      });
  }, []);

  const handleOpenCareerForm = () => setShowCareerForm(true);
  const handleCloseCareerForm = () => {
    setShowCareerForm(false);
    document.activeElement.blur();
  };

  if (loading) {
    return <p style={{padding:"140px"}}></p>;
  }

  if (error) {
    return <p style={{padding:"140px"}}>Error: {error}</p>;
  }

  return (
    <>
      {careerData && (
        <DynamicBanner
        deptName={i18n.language === 'ar' ? "المهن" : careerData.deptName}
          bannerImage={careerData.bannerImage}
          bannerPosition={careerData.bannerPosition}
          home={careerData.home}
        />
      )}
      
      <div className="careers-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          {t('career:currentOpenings', 'Current Job Openings')}
        </h2> */}
        
        <div className="jobs-list">
          {jobs.map((job, index) => (
            <Accordion
              key={index}
              title={i18n.language === 'ar' ? job.title_ar : job.title}
              content={
                <>
                  <p className="job-desc">
                    {i18n.language === 'ar' ? job.description_ar : job.description}
                  </p>
                  <div className="job-specs">
                    <p>
                      <strong>{t('career:experience', 'Experience')}:</strong> {i18n.language === 'ar' ? job.experience_ar : job.experience}
                    </p>
                    <p>
                      <strong>{t('career:location', 'Location')}:</strong> {i18n.language === 'ar' ? job.location_ar : job.location}
                    </p>
                  </div>
                </>
              }
              onApply={handleOpenCareerForm}
            />
          ))}
        </div>
      </div>

      {/* Career Form Modal */}
      <CareerForm showModal={showCareerForm} handleClose={handleCloseCareerForm} />
      
      <div className="line-container" style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          paddingTop: '10px',
        }}>
        <hr className="half-line" style={{ width: '50%', border: '0', height: '3px', backgroundColor: '#111', margin: '0' }} />
      </div>
    </>
  );
}