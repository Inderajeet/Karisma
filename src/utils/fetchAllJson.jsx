const defaultData = {
  images: [],
  styles: {},
  about: {},
  dental: {}
};

export const fetchAllJson = async () => {
  try {
    const [images, styles] = await Promise.all([
      fetch('/locales/images.json').then((res) => res.ok ? res.json() : defaultData.images),
      fetch('/locales/styles.json').then((res) => res.ok ? res.json() : defaultData.styles),
    ]);

    return { images, styles };
  } catch (error) {
    console.error('Error fetching JSON files:', error);
    return defaultData;
  }
};

export const fetchAboutContent = async () => {
  try {
    const about = await fetch('/locales/en/about.json').then((res) =>
      res.ok ? res.json() : defaultData.about
    );
    return { about };
  } catch (error) {
    console.error('Error fetching About content:', error);
    return defaultData;
  }
};

export const fetchDentalContent = async () => {
  try {
    const dental = await fetch('/locales/en/dental.json').then((res) =>
      res.ok ? res.json() : defaultData.dental
    );
    return { dental };
  } catch (error) {
    console.error('Error fetching About content:', error);
    return defaultData;
  }
};