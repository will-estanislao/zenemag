import Image from 'next/image'
import { fetchGalleryImages } from '@/lib/payloadPosts';
import { Media } from '@/payload-types';

export default async function ImageCards() {
  
  const image = await fetchGalleryImages();
  const loadImages = image.map(img =>
    <div key={img.id} className='place-items-center '>
    <Image
        src={`${(img as Media)?.url}`}
      width={500}
      height={img.height!}
      alt={img.alt}
      />
      </div>
  );
  
    return (
      <>{loadImages}</>
    );
}