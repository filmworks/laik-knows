import { ImgDataTypes } from '@/components/ui/image';

export type ParticipantCarouselTypes = {
  index: number;
  heading: string;
  list: ParticipantTypes[];
};

export type ParticipantTypes = {
  name: string;
  instagram: { url: string; username: string };
  image: ImgDataTypes;
  video?: string;
};
