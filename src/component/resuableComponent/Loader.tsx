import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {ConstNumber, GlobalStyleValues, StyleBase} from '../../constants';

type loaderType = {
  isLoading: boolean;
};

const styles = StyleSheet.create({
  container: {
    ...StyleBase.flex1,
    ...StyleBase.absoluteCenterPosition,
    ...StyleBase.inCenter,
    zIndex: ConstNumber.VALUE_100,
    backgroundColor: GlobalStyleValues.TransParent,
  },
});

const Loader = ({isLoading}: loaderType): React.JSX.Element | null => {
  if (!isLoading) {
    return null;
  }

  return (
    <View style={[styles.container, {bottom: ConstNumber.VALUE_100}]}>
      <ActivityIndicator size={'large'} color={'#BB86FC'} />
    </View>
  );
};

export default React.memo(Loader);
