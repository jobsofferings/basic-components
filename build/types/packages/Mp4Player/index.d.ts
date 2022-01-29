import React from "react";
export interface Mp4PlayerProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
    url: string;
}
declare const Mp4Player: ({ url, ...props }: Mp4PlayerProps) => JSX.Element;
export default Mp4Player;
