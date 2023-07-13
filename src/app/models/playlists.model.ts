export interface Playlists {
  curations: Array<Curation>
}

export interface Curation {
  playlist: string;
  name: string;
  description: string;
  itemCount: number;
  duration: number;
  id: number;
  // trackList: Array<Track>;
}

export interface Track {
  id: number;
  track: string;
  name: string;
  duration: number;
  artist: string;
  album: string;
}
