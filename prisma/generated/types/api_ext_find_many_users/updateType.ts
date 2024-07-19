// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { type_user_id } from "../../enum/type_user_id";

export type api_ext_find_many_usersUpdateType = {
  id: string;
  app_id?: string;
  url?: string;
  headers?: any;
  type_user_id?: type_user_id;
  created_time: Date;
  update_time?: Date;
};
