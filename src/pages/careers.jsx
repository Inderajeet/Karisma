import React from 'react'
import DynamicBanner from '../components/DynamicBanner'

export default function Careers() {
  return (
    <>
      <DynamicBanner deptName="Careers" serviceName="" bannerImage="../assets/Images/banner/careers.jpg" />
      <div style={{ margin: '10rem 0' }}></div>
      <div className="line-container" style={{ display: 'flex', width: '100%', justifyContent: 'center', paddingTop: '10px' }}>
        <hr className="half-line" style={{ width: '50%', border: '0', height: '3px', backgroundColor: '#111', margin: '0' }} />
      </div>
    </>
  )
}
