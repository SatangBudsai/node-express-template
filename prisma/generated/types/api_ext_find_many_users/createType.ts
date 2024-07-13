// AUTO GENERATED FILE BY prisma-generator-types-crud
// DO NOT EDIT

import { type_user_id } from "../../enum/type_user_id";

export type api_ext_find_many_usersCreateType = {
  app_id?: string | null;
  url?: string | null;
  headers?: any | null;
  type_user_id?: type_user_id | null;
  created_time?: Date | string;
  update_time?: (Date | string) | null;
};
