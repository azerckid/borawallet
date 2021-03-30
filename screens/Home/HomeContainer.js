import * as React from "react";
import { movieApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default () => {
  const [movies, setMovies] = React.useState({
    loading: true,
    nowPlaying: [],
    popular: [],
    upcoming: [],
    nowPlayingError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      popular,
      upcoming,
      nowPlayingError,
      popularError,
      upcomingError,
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <HomePresenter
      refreshFn={getData}
      {...movies}></HomePresenter>
  );
};