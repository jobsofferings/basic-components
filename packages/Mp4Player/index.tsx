import React from 'react'

export interface Mp4PlayerProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
  url: string
}

const Mp4Player = ({ url, ...props }: Mp4PlayerProps) => {
  return (
    <video src={url} autoPlay controls {...props}>
      <source src={url} type="video/mp4" />
      <track src={url} kind="captions" label="english_captions" />
    </video>
  )
}

export default Mp4Player
