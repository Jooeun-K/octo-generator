import { NextApiRequest, NextApiResponse } from "next";

/**
 * 사용하지 않는 파일입니다.
 */

type ResData = {
  name: string;
  imageUrl: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {

  console.log("api route function start")

  if (req.method === 'POST') {
    console.log("req: ", req.method)
    console.log("req: ", req.body)
  } else {
  }
}