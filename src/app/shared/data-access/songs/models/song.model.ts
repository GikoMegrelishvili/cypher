export interface SongModel {
  id?: string;
  artistsIds: string[];
  artistName: string;
  songName: string;
  coverImageUrl: string;
  color?: string;
}
