import * as React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horiziontal";
import ScrollContainer from "../../components/ScrollContainer";
import Transaction from "../../components/Transaction";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 5px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View``;

export default ({ refreshFn, loading, upcoming }) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      vertical
      style={{
        backgroundColor: "#3e4a85",
      }}
      contentContainerStyle={{
        // flex: loading ? 1 : "auto",
        justifyContent: loading ? "center" : "flex-start",
      }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <UpcomingContainer>
            {upcoming.map((movie) => (
              <>
                <Transaction></Transaction>
                {/* <Horizontal
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  votes={movie.vote_average}
                  releaseDate={movie.release_date}
                  poster={movie.poster_path}
                  overview={movie.overview}></Horizontal> */}
              </>
            ))}
          </UpcomingContainer>
        </>
      )}
    </ScrollContainer>
  );
};
