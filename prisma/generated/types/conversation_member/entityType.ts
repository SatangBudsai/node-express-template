// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { conversationEntityType } from "../conversation/entityType";
import { userEntityType } from "../user/entityType";

export type conversation_memberEntityType = {
  id: string;
  conversation_id?: string;
  user_id?: string;
  created_time: Date;
  update_time?: Date;
  conversation?: conversationEntityType;
  user?: userEntityType;
};
