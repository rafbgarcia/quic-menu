// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Place, MenuGroup, MenuItem, ItemImages } = initSchema(schema);

export {
  Place,
  MenuGroup,
  MenuItem,
  ItemImages
};