// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { conversation_type } from "../../enum/conversation_type";

export type conversationUpdateType = {
  id: string;
  app_id: string;
  type?: conversation_type;
  created_time: Date;
  update_time?: Date;
};
