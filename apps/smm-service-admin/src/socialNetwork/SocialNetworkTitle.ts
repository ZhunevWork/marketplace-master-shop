import { SocialNetwork as TSocialNetwork } from "../api/socialNetwork/SocialNetwork";

export const SOCIALNETWORK_TITLE_FIELD = "id";

export const SocialNetworkTitle = (record: TSocialNetwork): string => {
  return record.id?.toString() || String(record.id);
};
