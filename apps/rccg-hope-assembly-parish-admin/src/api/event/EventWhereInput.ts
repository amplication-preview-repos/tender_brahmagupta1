import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LivestreamListRelationFilter } from "../livestream/LivestreamListRelationFilter";

export type EventWhereInput = {
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  endTime?: StringNullableFilter;
  id?: StringFilter;
  livestreams?: LivestreamListRelationFilter;
  name?: StringNullableFilter;
  startTime?: StringNullableFilter;
};
