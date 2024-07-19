// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { conversationEntityType } from "../conversation/entityType";
import { massage_type } from "../../enum/massage_type";

export type messageEntityType = {
  id: string;
  sender_id: string;
  conversation_id: string;
  type?: massage_type;
  message?: string;
  user_read?: any;
  created_time: Date;
  update_time?: Date;
  conversation: conversationEntityType;
};
