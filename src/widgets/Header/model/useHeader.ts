import { useState, useRef } from 'react';
import { useGetGeoMutation } from 'shared/api';
import { setCity } from 'shared/store/model/citySlice';
import { useAppDispatch } from 'shared/store/model/hooks';

const useHeader = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [getCity, { isLoading }] = useGetGeoMutation();
  const handleClick = async () => {
    const resp = await getCity(inputRef.current!.value).unwrap();
    inputRef.current!.value = '';
    if (!resp) return setError(true);
    dispatch(setCity(resp));
    setError(false);
  };

  return { handleClick, isLoading, error, setError, inputRef };
};

export default useHeader;
