import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createRequest(ip: string, artistName: string, requestDate: Date) {

  try {

    return await prisma.request.create({
      data: {
        ip,
        artistName,
        requestDate
      }
    });

  } catch (err: any) {
    throw new Error(err);
  }

}

export {
  createRequest
}