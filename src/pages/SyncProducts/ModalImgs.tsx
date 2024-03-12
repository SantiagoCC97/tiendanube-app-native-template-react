import { FC, useState, useEffect } from 'react';
import { IObjImgs } from './SyncProducts.types';
import ChevronLeftico from '@/components/Icons/ChevronLeftico';
import { ChevronLeftIcon } from '@nimbus-ds/icons';
import { Icon } from '@nimbus-ds/components';

interface MiComponentePropss {
  toogle: boolean;
  setToogle: (flag: boolean) => void;
  objImgs: IObjImgs[];
}

const ModalImgs: FC<MiComponentePropss> = ({ toogle, setToogle, objImgs }) => {
  console.log('objImgs', objImgs);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (toogle) {
        if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toogle, currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % objImgs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + objImgs.length) % objImgs.length,
    );
  };

  const closeModal = () => {
    setToogle(false);
  };

  return (
    <div>
      {toogle && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9990,
          }}
        >
             <button className='fullscreen-button'
            onClick={closeModal}
          >
            
            
          </button>
          <button className="buttonCustom" onClick={prevImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#FFFFFF"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>

          <img
            style={{ width: '30%', height: 'auto', objectFit: 'cover' }}
            src={`https://d39ru7awumhhs2.cloudfront.net/${objImgs[currentImageIndex].urlS3}`}
            alt={`Product ${currentImageIndex}`}
          />
          <button className="buttonCustom" onClick={nextImage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#FFFFFF"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>

       
        </div>
      )}
    </div>
  );
};

export default ModalImgs;
