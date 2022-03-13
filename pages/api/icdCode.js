// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch("http://icd10api.com?s=A00&desc=short&r=json");

  const IcdCodes = response.json();
  res.status(200).json(IcdCodes);
}
