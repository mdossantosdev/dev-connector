import React from 'react';
import { DashBtn, IconBtn } from './styles';

const DashboardActions = () => {
  return (
    <div>
      <DashBtn to='/edit-profile'>
        <IconBtn className='fas fa-user-circle' /> Edit Profile
      </DashBtn>
      <DashBtn to='/add-experience'>
        <IconBtn className='fab fa-black-tie' /> Add Experience
      </DashBtn>
      <DashBtn to='/add-education'>
        <IconBtn className='fas fa-graduation-cap' /> Add Education
      </DashBtn>
    </div>
  );
};

export default DashboardActions;
