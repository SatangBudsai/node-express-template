// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { conversation_memberEntityType } from "../conversation_member/entityType";
import { applicationEntityType } from "../application/entityType";

export type userEntityType = {
  id: string;
  app_id: string;
  user_key: string;
  name?: string;
  profile?: string;
  created_time?: Date;
  update_time?: Date;
  conversation_member: conversation_memberEntityType[];
  mst_app: applicationEntityType;
};
