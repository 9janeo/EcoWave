import { TRACKS } from "./mock-tracks";
import { Playlist } from "./models/playlist.model";

export const PLAYLISTS: Playlist[] = [
  {
    coverUrl: 'https://via.placeholder.com/150',
    name: 'Neo Soul Groove',
    description: 'A collection of neo-soul artist you can\'t get enough of.',
    itemCount: 1,
    duration: 126,
    id: 1,
    trackListIds: [1,2]
  },
  {
    coverUrl: 'https://via.placeholder.com/150',
    name: 'Jazzy Beats',
    description: 'A collection of rythmic jazz music perfect for creative focus.',
    itemCount: 4,
    duration: 1126,
    id: 2,
    trackListIds: [3,4,5]
  },
  {
    coverUrl: 'https://via.placeholder.com/150',
    name: 'Don\'t call it a comeback',
    description: 'Hip-Hop songs released in the last 5 years that are reminiscent of the art form in the 90s.',
    itemCount: 10,
    duration: 4756,
    id: 3,
    trackListIds: [6]
  }
]
