import React from 'react';
import { useParams } from 'react-router-dom';

const OfferDetails = () => {
  const { slug } = useParams();

  const renderOffer = () => {
    switch (slug) {
      case 'basic-mo-premium-smile':
        return <></> ;
      case 'gc-snow-white-hollywood-smile':
        return <></>;
      case 'zircon-hollywood-smile':
        return <></>;
      case 'meso-fat-injections':
        return <></>;
      default:
        return <div>Offer not found.</div>;
    }
  };

  return <>{renderOffer()}</>;
};

export default OfferDetails;
