// @flow

import { mixpanelUrl, MIXPANEL_TOKEN, trackSignupGoogleAnalytics } from '../../helpers';

const encodeBase64 = JsonObject => btoa(JSON.stringify(JsonObject));

export const generateBase64SignupJSON = (email: string, token: string) => {
  const mixpanelEngageObject = {
    $token: token,
    $distinct_id: email,
    $set: {
      $first_name: email,
      $email: email
    }
  };
  return encodeBase64(mixpanelEngageObject);
};

const generateBase64TrackingJSON = (email: string, token: string, trackingEvent: string) => {
  const mixpanelTrackingObject = {
    event: trackingEvent,
    properties: {
      distinct_id: email,
      token
    }
  };
  return encodeBase64(mixpanelTrackingObject);
};

const generateMixpanelUrl = (data, endpoint) => `${mixpanelUrl}/${endpoint}/?data=${data}`;

export const signupOnMixpanel = async (email: string) => {
  const mixpanelSignupJSON = generateBase64SignupJSON(email, MIXPANEL_TOKEN);
  const signupUrl = generateMixpanelUrl(mixpanelSignupJSON, 'engage');
  return fetch(signupUrl);
};

export const trackOnMixpanel = async (email: string, trackingEvent: string) => {
  trackSignupGoogleAnalytics(trackingEvent); // google analytics
  const mixpanelTrackingJSON = generateBase64TrackingJSON(
    email,
    MIXPANEL_TOKEN,
    `user.${trackingEvent}`
  );
  const mixpanelTrackingUrl = generateMixpanelUrl(mixpanelTrackingJSON, 'track');
  await fetch(mixpanelTrackingUrl);
};
