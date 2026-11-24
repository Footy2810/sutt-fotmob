import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  const [goals, setGoals] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Vihaan ⚽</Text>
      <Text style={styles.score}>Goals: {goals}</Text>

      <Pressable style={styles.button} onPress={() => setGoals(goals + 1)}>
        <Text style={styles.buttonText}>Score a goal!</Text>
      </Pressable>
      <Pressable style={styles.resetbutton} onPress={() => setGoals(goals *0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b1d13',
  },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white' },
  score: { fontSize: 22, color: '#9ca3af', marginVertical: 20 },
  button: { backgroundColor: '#22c55e', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  resetbutton: { backgroundColor: '#ef4444', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 10, marginTop: 10 },
});