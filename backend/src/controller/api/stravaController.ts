import { Request, Response } from 'express';
import stravaService from '@services/strava/stravaService';

const get = (req: Request, res: Response): void => {
  res.send('strava router and controller works!'); 
}

const redirectToStravaAuth = (req: Request, res: Response): void => {
  const redirectUri = `${req.protocol}://${req.get('host')}/strava/callback`;
  const authUrl = stravaService.getStravaAuthUrl(redirectUri);
  res.redirect(authUrl);
};

const handleStravaCallback = async (req: Request, res: Response): Promise<void> => {
  const code: string | undefined = req.query.code as string;
  try {
    const tokenData = await stravaService.exchangeCodeForToken(code);
    res.redirect(`${process.env.FRONTEND_URL}/?token=${tokenData.access_token}`);
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    res.status(500).send('Server error');
  }
};

export default {
    get,
    redirectToStravaAuth,
    handleStravaCallback,
}