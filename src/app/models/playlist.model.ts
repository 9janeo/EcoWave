import { Track } from "./track.model";

export interface Playlist {
  playlist: string;
  name: string;
  description: string;
  itemCount: number;
  duration: number;
  id: number;
  trackList: Array<Track>;
}
