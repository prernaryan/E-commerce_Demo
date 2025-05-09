import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'; // Redux hooks
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../../redux/slice/counterSlice';

const CounterScreen = () => {
  const count = useSelector(state => state.counter.count); // Access Redux state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default CounterScreen;
