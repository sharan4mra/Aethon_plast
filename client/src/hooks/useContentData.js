import { useEffect, useState } from "react";
import { fetchContentByKey } from "../services/contentApi";

const useContentData = (key, fallbackData) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      try {
        const response = await fetchContentByKey(key);
        if (mounted && response?.data) {
          setData(response.data);
        }
      } catch (error) {
        if (mounted) {
          setData(fallbackData);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    const interval = setInterval(run, 5000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [fallbackData, key]);

  return { data, loading };
};

export default useContentData;
