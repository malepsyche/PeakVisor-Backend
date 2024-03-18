import { Request, Response } from 'express';
import stravaService from '@services/strava/stravaService';

const get = (req: Request, res: Response): void => {
  res.send('strava router and controller works!'); 
}

const redirectToStravaAuth = (req: Request, res: Response): void => {
  // const redirectUri = `${req.protocol}://${req.get('host')}/strava/callback`;
  // const authUrl = stravaService.getStravaAuthUrl(redirectUri);
  // res.redirect(authUrl);
  try {
    const state: string = req.query.state as string;
    const redirectUri = `${req.protocol}://${req.get('host')}/strava/callback`;
    const authUrl = stravaService.getStravaAuthUrl(redirectUri, state); 
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error getting strava auth url', error);
    res.status(500).send('Server error');
  }
};

const handleStravaCallback = async (req: Request, res: Response): Promise<void> => {
  const code: string | undefined = req.query.code as string;
  const state: string = decodeURIComponent(req.query.state as string);

  try {
    console.log("code: ", code)
    const tokenData = await stravaService.exchangeCodeForToken(code);
    console.log("token data: ", tokenData)
    console.log("Obtained tokenData!")
    // res.redirect(`${process.env.FRONTEND_URL}/?token=${tokenData.access_token}`);
    res.redirect(`${state}?token=${tokenData.access_token}`);
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