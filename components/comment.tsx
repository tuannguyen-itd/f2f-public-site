import React from 'react';
import { Comments, FacebookProvider } from 'react-facebook';

export interface IComment {
  url?: string;
}

export default function Comment({ url }: IComment) {
  return (
    <FacebookProvider appId={process.env.NEXT_PUBLIC_FACEBOOK_ID}>
      <Comments href={url} width="100%" />
    </FacebookProvider>
  );
}
