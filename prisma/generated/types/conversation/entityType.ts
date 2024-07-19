// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { applicationEntityType } from "../application/entityType";
import { conversation_memberEntityType } from "../conversation_member/entityType";
import { messageEntityType } from "../message/entityType";
import { conversation_type } from "../../enum/conversation_type";

export type conversationEntityType = {
  id: string;
  app_id: string;
  type?: conversation_type;
  created_time: Date;
  update_time?: Date;
  mst_app: applicationEntityType;
  conversation_member: conversation_memberEntityType[];
  message: messageEntityType[];
};
