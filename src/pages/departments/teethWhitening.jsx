import React, { useEffect, useState } from "react";
import { fetchAllJson } from "../../utils/fetchAllJson";
import { useTranslation } from "react-i18next";

const TeethWhitening = () => {
  const [loading, setLoading] = useStateState(true);
  const [error, setError] = useState(null);
  const { t, ready } = useTranslation("teethWhitening");
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const imageData = await fetchAllJson();

        setImageData(imageData);
        console.log(imageData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (!ready || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const { images } = imageData;
  const teethWhitening = t("teethWhitening", { returnObjects: true });
  return <div></div>;
};

export default TeethWhitening;
