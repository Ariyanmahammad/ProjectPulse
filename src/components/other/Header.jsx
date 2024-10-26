
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ data, changeUser }) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  }

  return (
    <div className='flex justify-between items-center p-5'>
  
      <h1 className='text-white text-2xl font-bold'>
        Hello <br />
        <span className='text-emerald-500 font-bold text-3xl'>
          {data && data.firstName ? data.firstName : 'Ariyan'} 👋
        </span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-4 py-2 rounded-md'>
        Logout
      </button>
    </div>
  )
}

Header.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired
  }),
  changeUser: PropTypes.func.isRequired,
}

export default Header;

