import { createRequest } from "../db/dao/requestsDao";

async function saveRequest(ip: string, artistName: string) {

  try {

    await createRequest(ip, artistName, new Date());

  } catch (err: any) {
    console.error(err);
  }

}

export {
  saveRequest
}