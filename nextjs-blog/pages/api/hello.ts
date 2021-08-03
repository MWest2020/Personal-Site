import { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({
      text: "Hello, from a TypeScripted API call. Check out the docs on NextApiRequest and NextAPiResponse",
    });
};
