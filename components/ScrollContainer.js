import React from "react";
import { ScrollView, ActivityIndicator, RefreshControl } from "react-native";
import PropTypes from "prop-types";

const ScrollContainer = ({
  loading,
  children,
  contentContainerStyle,
  refreshFn,
}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      vertical
      style={{
        backgroundColor: "black",
      }}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}></RefreshControl>
      }
      contentContainerStyle={{
        // flex: loading ? "1" : "auto",
        justifyContent: loading ? "center" : "flex-start",
        ...contentContainerStyle,
      }}>
      {loading ? <ActivityIndicator color="white" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func,
};

export default ScrollContainer;
