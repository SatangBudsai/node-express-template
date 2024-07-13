// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { api_ext_find_many_usersEntityType } from "../api_ext_find_many_users/entityType";
import { conversationEntityType } from "../conversation/entityType";
import { userEntityType } from "../user/entityType";

export type applicationEntityType = {
  id: string;
  domain?: string;
  name?: string;
  logo?: string;
  created_time: Date;
  update_time?: Date;
  api_ext_find_many_users: api_ext_find_many_usersEntityType[];
  conversation: conversationEntityType[];
  user: userEntityType[];
};
