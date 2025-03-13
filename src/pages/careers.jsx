import React from 'react'
import DynamicBanner from '../components/DynamicBanner'
import { useTranslation } from "react-i18next";


export default function Careers() {
  const { t, i18n } = useTranslation('career');

  const career = t('career', { returnObjects: true });  // Fetch the entire contact object
  return (
    <>
      <DynamicBanner deptName={career.deptName}
        bannerImage={career.bannerImage}
        bannerPosition={career.bannerPosition}
        deptLink={career.deptLink}
        home={career.home}
      />
      <div style={{ margin: '10rem 0' }}></div>
      <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '10px' }}>
        <hr className="half-line" style={{ width: '50%', border: '0', height: '3px', backgroundColor: '#111', margin: '0' }} />
      </div>
    </>
  )
}
