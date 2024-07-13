// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { conversation_type } from "../../enum/conversation_type";

export type conversationCreateType = {
  app_id?: string;
  type?: conversation_type | null;
  created_time?: Date | string;
  update_time?: (Date | string) | null;
};
