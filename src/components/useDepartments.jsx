// src/hooks/useDepartments.js
import { useState, useEffect } from 'react';

export function useDepartments(i18n, fallbackDepartments) {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartments = async (retryCount = 0) => {
      try {
        const response = await fetch('https://demo.karismamc.com/api/departments', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          if (response.status === 429 && retryCount < 3) {
            const delay = Math.pow(2, retryCount) * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchDepartments(retryCount + 1);
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data?.success && data.departmentPage) {
          const formattedDepts = data.departmentPage.slice(1).map(dept => ({
            name: i18n.language === 'ar' ? dept.title_arabic || dept.title : dept.title,
            link: `/${dept.link}`
          }));
          setDepartments(formattedDepts);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        console.error("Departments API error:", err);
        if (fallbackDepartments && departments.length === 0) {
          setDepartments(fallbackDepartments);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we don't have data yet
    if (departments.length === 0) {
      fetchDepartments();
    }
  }, [i18n.language]);

  return { departments, loading, error };
}