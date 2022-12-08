import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { TiWeatherCloudy } from 'react-icons/ti';

import Input from 'shared/components/Input';
import Button from 'shared/components/Button';
import CitiesPanel from './ui/CitiesPanel';
import useHeader from './model/useHeader';

const Header = () => {
  const { handleClick, isLoading, error, setError, inputRef } = useHeader();

  return (
    <header className="flex items-center h-20 bg-white shadow-md">
      <div className="container flex justify-between items-center mx-auto px-2.5 md:px-5">
        <Link to="/">
          <TiWeatherCloudy className="w-10 h-10" />
        </Link>
        <div className="flex">
          <Input
            onFocus={() => setError(false)}
            placeholder="Enter the title"
            ref={inputRef}
            error={error ? 'This city was not found' : ''}
            className="!rounded-r-none border-r-0 w-64"
          />
          <Button
            disabled={isLoading}
            onClick={handleClick}
            className="!rounded-l-none flex gap-2 w-24 items-center justify-center"
          >
            {isLoading && <FaSpinner className="w-5 h-5 animate-spin" />}
            Search
          </Button>
        </div>
        <CitiesPanel />
      </div>
    </header>
  );
};

export default Header;
