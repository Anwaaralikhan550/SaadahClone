import type { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '../../../server/storage';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const today = new Date().toISOString().split('T')[0];
      const prayerTimes = await storage.getPrayerTimes(today);
      
      if (!prayerTimes) {
        // Return default prayer times if not found
        const defaultTimes = {
          date: today,
          fajr: "5:15 AM",
          dhuhr: "12:30 PM",
          asr: "3:45 PM",
          maghrib: "6:20 PM",
          isha: "7:45 PM",
          sunrise: "6:45 AM"
        };
        res.json(defaultTimes);
      } else {
        res.json(prayerTimes);
      }
    } catch (error) {
      console.error("Error fetching today's prayer times:", error);
      res.status(500).json({ message: "Failed to fetch prayer times" });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}