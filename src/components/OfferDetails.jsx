import React from 'react';
import { useParams } from 'react-router-dom';
import BasicMoSmile from '../pages/services/BasicMoSmile';
import SnowWhiteSmile from '../pages/services/SnowWhiteSmile';
import ZirconSmile from '../pages/services/ZirconSmile';
import MesoFatInjections from '../pages/services/MesoFatInjections';
import HydraFacial from '../departments/skincare/facial/hydrafacial';

const OfferDetails = () => {
  const { slug } = useParams();

  const renderOffer = () => {
    switch (slug) {
      case 'basic-mo-premium-smile':
        return <BasicMoSmile />;
      case 'gc-snow-white-hollywood-smile':
        return <SnowWhiteSmile />;
      case 'zircon-hollywood-smile':
        return <ZirconSmile />;
      case 'basic-hydrafacial':
        return <HydraFacial />;
      case 'meso-fat-injections':
        return <MesoFatInjections />;
      default:
        return <div>Offer not found.</div>;
    }
  };

  return <>{renderOffer()}</>;
};

export default OfferDetails;
