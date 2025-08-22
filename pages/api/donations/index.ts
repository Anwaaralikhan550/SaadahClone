import type { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '../../../server/storage';
import { insertDonationSchema } from '../../../shared/schema';
import { z } from 'zod';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const validatedData = insertDonationSchema.parse(req.body);
      const donation = await storage.createDonation(validatedData);
      
      // In a real implementation, this would integrate with a payment processor
      // For now, we'll mark it as completed
      await storage.updateDonationStatus(donation.id, "completed");
      
      res.status(201).json(donation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid donation data", errors: error.errors });
      }
      console.error("Error processing donation:", error);
      res.status(500).json({ message: "Failed to process donation" });
    }
  } else if (req.method === 'GET') {
    try {
      const donations = await storage.getDonations();
      res.json(donations);
    } catch (error) {
      console.error("Error fetching donations:", error);
      res.status(500).json({ message: "Failed to fetch donations" });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}