import { MIXPANEL_TOKEN, track } from '../../../helpers';

declare type MixpanelEngageObjectProps = {
  $token: string;
  $distinct_id: string;
  $set: {
    $first_name: string;
    $email: string;
  };
};

declare type MixpanelTrackingObjectProps = {
  event: string;
  properties: {
    distinct_id: string;
    token: string;
  };
};

const encodeBase64 = (JsonObject: MixpanelEngageObjectProps | MixpanelTrackingObjectProps) =>
  btoa(JSON.stringify(JsonObject));

export const generateBase64SignupJSON = (email: string, token: string) => {
  const mixpanelEngageObject = {
    $token: token,
    $distinct_id: email,
    $set: {
      $first_name: email,
      $email: email,
    },
  };
  return encodeBase64(mixpanelEngageObject);
};

const generateBase64TrackingJSON = (email: string, token: string, trackingEvent: string) => {
  const mixpanelTrackingObject = {
    event: trackingEvent,
    properties: {
      distinct_id: email,
      token,
    },
  };
  return encodeBase64(mixpanelTrackingObject);
};

declare type EndPoint = 'engage' | 'track';

const generateMixpanelUrl = (data: string, endpoint: EndPoint) => `${endpoint}/?data=${data}`;

export const signupOnMixpanel = async (email: string) => {
  const mixpanelSignupJSON = generateBase64SignupJSON(email, MIXPANEL_TOKEN);
  const signupUrl = generateMixpanelUrl(mixpanelSignupJSON, 'engage');
  return fetch(signupUrl);
};

export const trackOnMixpanel = async (email: string, trackingEvent: string) => {
  track(trackingEvent); // google analytics
  const mixpanelTrackingJSON = generateBase64TrackingJSON(
    email,
    MIXPANEL_TOKEN,
    `user.${trackingEvent}`
  );
  const mixpanelTrackingUrl = generateMixpanelUrl(mixpanelTrackingJSON, 'track');
  await fetch(mixpanelTrackingUrl);
};
