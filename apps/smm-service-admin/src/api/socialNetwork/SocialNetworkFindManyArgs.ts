import { SocialNetworkWhereInput } from "./SocialNetworkWhereInput";
import { SocialNetworkOrderByInput } from "./SocialNetworkOrderByInput";

export type SocialNetworkFindManyArgs = {
  where?: SocialNetworkWhereInput;
  orderBy?: Array<SocialNetworkOrderByInput>;
  skip?: number;
  take?: number;
};
