import SpotifyWebApi from "spotify-web-api-node";

async function getAlbumsByArtistName(artistName: string, spotifyApi: SpotifyWebApi) {

  try {
    const artists = await spotifyApi.searchArtists(artistName);
    const artist = artists?.body?.artists?.items[0];

    if (artist) {
      const albumsResume = await spotifyApi.getArtistAlbums(artist.id);
      const albumsData = await spotifyApi.getAlbums(albumsResume?.body?.items?.map(({ id }) => id));

      const albumsResponse = !albumsData?.body?.albums.length ? [] :
        albumsData?.body?.albums.map(album => ({
          id: album.id,
          name: album.name,
          images: album.images,
          popularity: album.popularity,
          release_date: album.release_date,
          total_tracks: album.total_tracks
        }))
          .sort((x, y) => y.popularity - x.popularity);

      return {
        artistId: artist.id,
        artistName: artist.name,
        artistImages: artist.images,
        albums: albumsResponse,
      }
    }

    return {};

  } catch (err: any) {
    console.error(err);
    throw new Error(err);
  }

}

export {
  getAlbumsByArtistName
}