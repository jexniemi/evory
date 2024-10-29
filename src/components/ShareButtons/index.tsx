"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import { usePathname } from "next/navigation";
import MiddleColumn from "@/components/common/MiddleColumn";

export default function ShareButtons() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row h-7 bg-gray-200 dark:bg-base-100">
      <MiddleColumn>
        <div>
          <FacebookShareButton url={`https://evory.com/${pathname}`}>
            <FacebookIcon size={30} />
          </FacebookShareButton>
          <TelegramShareButton url={`https://evory.com/${pathname}`}>
            <TelegramIcon size={30} />
          </TelegramShareButton>
          <EmailShareButton url={`https://evory.com/${pathname}`}>
            <EmailIcon size={30} />
          </EmailShareButton>
          <WhatsappShareButton url={`https://evory.com/${pathname}`}>
            <WhatsappIcon size={30} />
          </WhatsappShareButton>
          <TwitterShareButton url={`https://evory.com/${pathname}`}>
            <TwitterIcon size={30} />
          </TwitterShareButton>
          <RedditShareButton url={`https://evory.com/${pathname}`}>
            <RedditIcon size={30} />
          </RedditShareButton>
          <LinkedinShareButton url={`https://evory.com/${pathname}`}>
            <LinkedinIcon size={30} />
          </LinkedinShareButton>
        </div>
      </MiddleColumn>
    </div>
  );
}
