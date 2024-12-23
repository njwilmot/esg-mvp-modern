import { NextApiRequest, NextApiResponse } from 'next';
import { leadValidationSchema } from '../../utils/validation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await leadValidationSchema.validate(req.body, { abortEarly: false });
      res.status(200).json({ message: 'Validation successful' });
    } catch (validationError) {
      res.status(400).json({ errors: validationError.errors });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
