import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <Text style={styles.label}>Name:</Text>
        <Text style={styles.content}>
          Jc Caviteño
        </Text>
      <Text style={styles.label}>Age:</Text>
        <Text style={styles.content}>
          20
        </Text>
      <Text style={styles.label}>Course/Year/Section:</Text>
        <Text style={styles.content}>
          Bachelor of Science in Computer Science
        </Text>
      <Text style={styles.label}>About Me:</Text>
        <Text style={styles.content}>
          As a thrid-year Computer Science student, I have acquired a solid foundation in programming and web development. I am proficient in HTML, CSS, JavaScript, and Java.
        </Text>
      <Text style={styles.label}>Achievements:</Text>
        <Text style={styles.content}>
          <FlatList
          style={styles.list}
          data={achievements}
          keyExtractor= {achievements => achievements.name}
          renderItem={({item}) => 
            <Text style={styles.item}> - {item.name}</Text>}
          />
        </Text>
      <Text style={styles.label}>Skills:</Text>
        <Text style={styles.content}>
          <FlatList
          style={styles.list}
          data={skills}
          keyExtractor= {skills => skills.name}
          renderItem={({item}) => 
            <Text style={styles.item}> - {item.name}</Text>}
          />
        </Text>
    </View>
  );
}

const achievements = [
      {name: "CSSO Committee on Finance Member (2024-2025)"},
      {name: "AWS-Spade Committee on Finance Member (2025-2026)"}
]

const skills = [
      {name: "Java"},
      {name: "HTML and CSS"},
      {name: "JavaScript"},
      {name: "PHP"}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7DBBF',
    padding: 8,
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    color: '#5C3619',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    marginLeft: 24,
    marginTop: 14,
    color: '#5C3619',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    marginLeft: 24,
    marginRight: 24,
    color: '#331E0E',
    fontSize: 16,
  },
  list: {
    marginLeft: 24,
    marginRight: 24,
  },
  item: {
    color: '#331E0E',
    fontSize: 16,
  },
});
