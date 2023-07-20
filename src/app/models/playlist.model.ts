import { Track } from "./track.model";

export interface Playlist {
  id: number;
  coverUrl: string;
  name: string;
  description: string;
  itemCount: number; // calculate using trackList
  duration: number; // calculate from tracklist
  trackListIds: number[];
  trackLists?: Track[];
}
