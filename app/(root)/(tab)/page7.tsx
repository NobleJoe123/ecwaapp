import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/ecwa-logo.png')} style={styles.logo} />
        <View>
          <Text style={styles.title}>Sunday School Manual 2025</Text>
          <Text style={styles.motto}>Theme: If you seek me and find me.</Text>
        </View>
      </View>

      {/* Lesson Title */}
      <View style={styles.titleHead}>
        <Text style={styles.tit}>Lesson 7: THE RICHMAN'S FATHER'S HOUSE</Text>
        <Text style={styles.tit}>Text: LUKE 16: 19-31</Text>
        <Text style={styles.tit}>Aim: That we may learn to witness and pray for the salvation of members of our father's house before it becomes too late.</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> The task of reaching out to unbelievers is usually seen by many as a task to other people in distant villages, towns among others. Many embark on this task without remembering members of their immediate family who are yet to be saved. The story of the rich
          man is typical of one who dies before knowing the truth and eventually discovers that it was too late. When he was alive, he paid no attention to his spiritual life or those of his brethren.

        </Text>

        <Text style={styles.subtitle}>A.  THE RICH MAN ON EARTH</Text>
        <Text style={styles.content}><Text>The story of the rich man as contained in our anchor text for this lesson could be described in the following context:</Text>
          1. <Text>He was rich and did not lack the three basic necessities of life: food, shelter and clothing.          </Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>He was unmindful of others in his immediate vicinity.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>He was all alone by himself and his immediate family. Nothing is said about his father's house. </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text> He was concerned about living well here on earth. Nothing is mentioned about his plans or prayers for the life after, for members of his father's house and others in his vicinity.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>He blesses them (Isaiah 30: 18). There are general blessings like sunshine, air, rain etc. For everyone, but special blessings come the way of those who wait on God.
          </Text>
        </Text>
        <Text style={styles.subtitle}>B. THE RICH MAN AFTER DEATH</Text>

        <Text style={styles.content}>
          1. <Text>After death, he found himself being tormented in Hades.
          </Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>He found himself separated from Father Abraham and Lazarus whom he knew on earth.
          </Text>

        </Text>
        <Text style={styles.content}>
          3. <Text>He pleaded for mercy, requested for a dip of water to cool his tongue because of his anguish but was not granted any of his personal requests because in his life time, he didn't settle the  issue of his eternity.</Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>He remembered his father's house and the number of his brothers. He wanted them warned so they won't end up like him and prayed on their behalf, but he was told it was too late.
          </Text>

        </Text>
        <Text style={styles.subtitle}>C. LESSONS FOR US</Text>

        <Text style={styles.content}>
          1. <Text>God makes the choice of the family we are born into, the choice of our parents and the siblings we have (Acts 17: 26). We must understand and appreciate the fact that God intentionally
            locates us in our families with each one of us having a role to play for the good of others. One of this is to show the light of salvation.

          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>It is possible to forget members of our father's house and not relate with them on earth and even justify this action. However in heaven, we will remember them and it will matter to us when
            we stand before God. May it not be too late for us and end in eternal regret.
          </Text>
          <Text style={styles.content}>
            3. <Text>We must not allow any hurt or offenses to separate us from our siblings. We are to love them and pray for their salvation (1Timothy 2: 4). To err is human but to forgive is divine.
              This we pray every time we say the Lord's Prayer,"Father forgive us our trespasses as we forgive those who trespass against us". </Text>
          </Text>
          <Text style={styles.content}>
            4. <Text>The door of Salvation remains open and the opportunity to share or hear the good news of gospel of Jesus that leads to salvation exists as long as a person is still alive. After death, it becomes close and the opportunity ceases!</Text>
          </Text>
        </Text>
       
        <Text style={styles.subtitle}>D. HOW TO REACH OUR FATHER'S HOUSE</Text>

        <Text style={styles.content}>
          1. <Text>Love and pray for them (John 13:34; James 5: 16).
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Witness to those who are yet to accept Jesus Christ as Lord and Saviour (Matthew 28:19, 20). Be intentional about this for familiarity hinders many from doing this.          </Text>
          <Text style={styles.content}>
            3. <Text>Be concerned for their welfare and be there to give a helping hand within your means (1 Timothy 5:8). </Text>
          </Text>
        </Text>


        <Text style={styles.memoryVerse}>Memory Verse: 1Timothy 2: 4</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  motto: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555'
  },
  titleHead: {
    padding: 15,
    backgroundColor: '#e6f7ff',
    marginBottom: 10,
  },
  tit: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#007acc'
  },
  content: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginTop: 5
  },
  memoryVerse: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
    marginTop: 20,
    textAlign: 'center'
  },
});

export default page7;
