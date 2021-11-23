import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';

const KeyboardSection: React.FC<{
  title: string;
}> = () => {
  return (
    <TouchableWithoutFeedback>
      <Text>1</Text>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardSection;
