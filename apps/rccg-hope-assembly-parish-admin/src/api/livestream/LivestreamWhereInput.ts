import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LivestreamWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  url?: StringNullableFilter;
};
