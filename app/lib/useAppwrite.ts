import { Alert } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { UseAppwriteOptions, UseAppwriteReturn } from '@/types';

export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  // Setup states
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  // A callback function that handles computational fetch function with performance
  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);

        // Update the data state with the new result data
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : 'An unknown error occurred';
        // Update the error state
        setError(errorMessage);
        Alert.alert('Error', errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn],
  );

  useEffect(() => {
    // Fetch data on screen load
    if (!skip) {
      fetchData(params);
    }
  }, []);

  // Refetch data function
  const refetch = async (newParams: P) => await fetchData(newParams);

  // Return the states and refetch function
  return { data, loading, error, refetch };
};
