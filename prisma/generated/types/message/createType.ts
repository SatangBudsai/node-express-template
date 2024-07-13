// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { massage_type } from "../../enum/massage_type";

export type messageCreateType = {
  sender_id: string;
  conversation_id?: string;
  type?: massage_type | null;
  message?: string | null;
  user_read?: any | null;
  created_time?: Date | string;
  update_time?: (Date | string) | null;
};
