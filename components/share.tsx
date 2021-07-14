import React from 'react';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

export interface IShare {
  url?: string;
  title?: string;
}

export default function Share({ url, title }: IShare) {
  return (
    <>
      <h4>Share this paper</h4>
      <FacebookShareButton url={url} title={title} className="mr-4">
        <FacebookIcon size={35} borderRadius={5} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={35} borderRadius={5} />
      </TwitterShareButton>
    </>
  );
}
