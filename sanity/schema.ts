import { type SchemaTypeDefinition } from 'sanity'
import Image from "./Docs/Image";
import Work from "./Docs/Work";
import post from "./Docs/blog";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Image,Work,post],
}