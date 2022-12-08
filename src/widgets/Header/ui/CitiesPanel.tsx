import { Menu, Transition } from '@headlessui/react';
import { Fragment, memo, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import {
  getMenuItem,
  menuStyle,
  menuTransition,
  menuBtnStyle,
  deleteBtnStyle,
} from '../lib/styles';
import { useAppDispatch, useAppSelector } from 'shared/store/model/hooks';
import { setCity, setCities } from 'shared/store/model/citySlice';
import { setLocalCities } from 'shared/common/utils';
import Button from 'shared/components/Button';
import { IGeoResponse } from 'shared/api/lib/types';

const CitiesPanel = () => {
  const cities = useAppSelector(state => state.citySlice.cities);
  const dispatch = useAppDispatch();

  const dispatchCity = (city: IGeoResponse) => () => dispatch(setCity(city));
  const delAll = () => dispatch(setCities([]));
  const delCity = (city: string) => () => {
    dispatch(setCities(cities.filter(item => item.name !== city)));
  };

  useEffect(() => setLocalCities(JSON.stringify(cities)), [cities]);

  return (
    <div className="flex gap-2">
      <Menu as="div" className="relative">
        <Menu.Button disabled={!cities.length} className={menuBtnStyle}>
          Favorite cities
        </Menu.Button>
        <Transition as={Fragment} {...menuTransition}>
          <Menu.Items className={menuStyle}>
            <div className="px-1 py-1 space-y-1">
              {cities.map(item => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <div className="flex items-center gap-2 justify-evenly">
                      <div className={getMenuItem(active)} onClick={dispatchCity(item)}>
                        {item.name}
                      </div>
                      <div className={deleteBtnStyle} onClick={delCity(item.name)}>
                        <FaTrash className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Button disabled={!cities.length} onClick={delAll}>
        Clear
      </Button>
    </div>
  );
};

export default memo(CitiesPanel);
