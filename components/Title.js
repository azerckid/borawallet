import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;

  font-weight: bold;
  font-size: 16px;
  margin-left: 0px;
  margin-bottom: 10px;
  text-align: center;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
