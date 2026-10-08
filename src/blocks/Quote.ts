import { Block } from "payload";

const Quote: Block = {
  slug: "quote",
  //imageURL: 'localhost/media',
  imageAltText: "quote block",
  fields: [
    {
      name: "quote",
      type: "textarea",
    },
    {
      name: "author",
      type: "text",
    },
  ],
};

export default Quote;
