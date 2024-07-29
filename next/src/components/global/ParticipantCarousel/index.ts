import { ImgDataQuery } from '@/components/ui/image';
import { VideoDataQuery } from '@/components/ui/video';
import ParticipantCarousel from './ParticipantCarousel';

export default ParticipantCarousel;
export type { ParticipantCarouselTypes } from './ParticipantCarousel.types';

export const ParticipantCarousel_Query = `
    _type == "ParticipantCarousel" => {
        heading,
        list[] -> {
            name,
            instagram,
            image {
                ${ImgDataQuery}
            },
            video{
                ${VideoDataQuery}
            }, 
        },
    },

`;
