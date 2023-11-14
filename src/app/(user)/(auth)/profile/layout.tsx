import React from 'react'
import ProfileSidebar from './_sidebar';

const layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    
  return (
    <>
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <ProfileSidebar />

        <div className="w-9/12">
          <div className="p-4 text-gray-500">{children}</div>
        </div>
      </div>
    </>
  );
}

export default layout;