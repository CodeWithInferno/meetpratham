import { type SchemaTypeDefinition } from 'sanity'
import Image from "./Docs/Image";
import Work from "./Docs/Work";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Image,Work],
}