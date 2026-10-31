import Image from 'next/image'
import { fetchGalleryImages } from '@/lib/payloadPosts';
import { Media } from '@/payload-types';

export default async function ImageCards() {

  //const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  //const fileURL = process.env.NEXT_PUBLIC_SITE_URL + '/';
  //console.log(fileURL);
  
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
      <>{loadImages}</>
    );
}