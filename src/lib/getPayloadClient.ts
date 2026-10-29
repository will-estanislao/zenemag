import { BasePayload, getPayload } from "payload";
import config from "@payload-config";

export const getPayloadClient: () => Promise<BasePayload> = async () =>
  await getPayload({ config }); // Helper for connecting with payload
