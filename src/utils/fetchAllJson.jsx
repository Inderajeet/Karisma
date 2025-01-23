const defaultData = {
    images: [],
    styles: {},
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
  