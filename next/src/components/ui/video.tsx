export const VideoDataQuery = `
  asset -> {
    url,
  },
`;

export type VideoDataTypes = {
  asset: {
    url: string;
  };
};

type VideoTypes = (
  | {
      data: VideoDataTypes;
      src?: never;
    }
  | { data?: never; src: string }
) &
  React.HTMLAttributes<HTMLVideoElement>;

export default function Video({ data, src, ...props }: VideoTypes) {
  if (data) {
    src = data.asset?.url;
  }
  return <video src={src} {...props} />;
}
