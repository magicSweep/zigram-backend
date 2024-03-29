import { compose, cond, elif, justReturn } from "fmagic";
//import { CleanUpRequestData } from "lizzygram-common-data/dist/types";
import {
  ValidateReqParams,
  ValidateReqParamsProps,
} from "../../../validateReqParams/types";

export type ValidateReqParamsData = ValidateReqParamsProps & {
  error?: string;
};

// reqParams - googleDirveId, fileName
export const validateReqParams: ValidateReqParams = cond<
  ValidateReqParamsProps,
  boolean | string
>([
  [
    ({ reqQuery }: ValidateReqParamsProps) =>
      reqQuery === undefined ||
      typeof reqQuery.name !== "string" ||
      typeof reqQuery.gid !== "string" ||
      typeof reqQuery.token !== "string",
    () => "No or bad query params...",
  ],
  [() => true, () => true],
]);
/* elif(
    ({ reqParams, reqQuery }: ValidateReqParamsProps) =>
      reqParams === undefined ||
      reqParams.googleDriveId === undefined ||
      reqParams.fileName === undefined,
    (props: ValidateReqParamsProps) => ({
      ...props,
      error: "No googleDriveId or fileName",
    }),
    justReturn
  ), 
  elif<ValidateReqParamsData, boolean | string>(
    ({ error }: ValidateReqParamsData) => error !== undefined,
    (data: ValidateReqParamsData) => data.error as string,
    () => true
  )*/
