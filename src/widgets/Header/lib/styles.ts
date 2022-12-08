import clsx from 'clsx';

const deleteBtnStyle = 'p-2 rounded-full hover:bg-black hover:text-white hover:cursor-pointer';
const menuStyle =
  'absolute z-50 right-0 w-52 mt-1.5 origin-top-right bg-white rounded-md shadow-lg focus:outline-none';
const menuBtnStyle =
  'flex items-center border text-sm px-2.5 py-1.5 font-medium rounded text-white bg-gray-900 hover:text-black hover:bg-white transition duration-300 gap-1 disabled:opacity-70 disabled:hover:bg-gray-900 disabled:hover:text-white h-[50px]';
const getMenuItem = (active: boolean) =>
  clsx(
    'group w-3/4 flex justify-center gap-2 font-medium items-center rounded-md p-2 text-sm transition duration-300 cursor-pointer',
    active ? 'bg-black text-white' : 'text-gray-900'
  );

const menuTransition = {
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
};

export { deleteBtnStyle, menuStyle, menuBtnStyle, getMenuItem, menuTransition };
