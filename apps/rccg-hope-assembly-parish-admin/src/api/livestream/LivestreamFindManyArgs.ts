import { LivestreamWhereInput } from "./LivestreamWhereInput";
import { LivestreamOrderByInput } from "./LivestreamOrderByInput";

export type LivestreamFindManyArgs = {
  where?: LivestreamWhereInput;
  orderBy?: Array<LivestreamOrderByInput>;
  skip?: number;
  take?: number;
};
