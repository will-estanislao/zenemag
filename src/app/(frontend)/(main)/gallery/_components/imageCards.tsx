import Image from 'next/image';
import { fetchGalleryImages } from '@/lib/payloadPosts';
import { getPayloadClient } from "@/lib/getPayloadClient";
import { BasePayload } from "payload";
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function ImageCards() {

      const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    
    const images = await payload.find({
        collection: "media",
        where: {
          "folders.name": {
            equals: "gallery",
          },
        },
      });
    
    const loadImages = images.docs.map(img =>
        
            <Image
                src={img.url!}
                width={500}
                height={img.height!}
                alt={img.alt}
                 key={img.id}
            />

    );
    

    return (
        <>{loadImages }</>
    );
}