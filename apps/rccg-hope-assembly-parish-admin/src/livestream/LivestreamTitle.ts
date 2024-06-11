import { Livestream as TLivestream } from "../api/livestream/Livestream";

export const LIVESTREAM_TITLE_FIELD = "url";

export const LivestreamTitle = (record: TLivestream): string => {
  return record.url?.toString() || String(record.id);
};
