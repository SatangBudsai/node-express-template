// AUTO GENERATED FILE BY prisma-typegen
// DO NOT EDIT

import { conversationEntityType } from "../conversation/entityType";
import { messageEntityType } from "../message/entityType";
import { userEntityType } from "../user/entityType";

export type mst_appEntityType = {
  id: string;
  domain?: string;
  name?: string;
  logo?: string;
  created_time: Date;
  update_time?: Date;
  conversation: conversationEntityType[];
  message: messageEntityType[];
  user: userEntityType[];
};
