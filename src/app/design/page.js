import React from 'react';
import DesignSideBar from './DesignSideBar';
import DesignSearchBar from './DesignSearchBar';
import DesignCard from './DesignCard';

const projectImages = [
  '/design_pages_images/image.svg', '/design_pages_images/image (1).svg', '/design_pages_images/image (2).svg',
  '/design_pages_images/image (3).svg', '/design_pages_images/image (4).svg'
];

export default function page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on small screens */}
      <div className="hidden lg:block">
        <DesignSideBar />
      </div>

      <div className="flex-1 p-6">
        <DesignSearchBar />
        {/* Card grid with responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 lg:mt-6  ">
          <DesignCard isNew={true} />
          {projectImages.map((src, i) => (
            <DesignCard key={i} imgSrc={src} />
          ))}
        </div>
      </div>
    </div>
  );
}
