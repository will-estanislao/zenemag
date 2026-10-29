import Image from 'next/image'
import { fetchGalleryImages } from '@/lib/payloadPosts';
import { testGallery } from '../data';
import { getGalleryImgUrl } from '../_utils/utils';

export default async function ImageCards() {
  
  const image = await fetchGalleryImages();
  const loadImages = image.docs.map(img =>
    <Image
      src={(img)?.url!}
      width={500}
      height={img.height!}
      alt={img.alt}
      key={img.id}
    />
    );
  
  /*
  const loadImages = testGallery.map(img =>
      <Image
        src={getGalleryImgUrl(img.imgID)}
        width={500}
        height={img.height!}
        alt={img.imgID}
        key={img.id}
      />

    );
    */
  
    return (
      <><p>Oh boy wtf</p>
        { loadImages}</>
    );
}