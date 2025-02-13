import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page15 = () => {
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
        <Text style={styles.tit}>Lesson 15: THE SIGNIFICANCE OF MATERIALS USED ON PALM

        </Text>
        <Text style={styles.tit}>Text: Matthew 21: 6-11.</Text>
        <Text style={styles.tit}>Aim: That we may know and appreciate Jesus as the Lamb of God who takes away the sins of the world.

        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>Every year we celebrate the Palm Sunday a week before Easter. We do this using some of the materials the Jews used during the triumphant entry of Christ into Jerusalem. These materials include the Donkey (Ass), Garments, Palm tree leaves and Songs. Each is significant as they represent symbolically important aspects of Jesus' ministry and teach us what our attitude towards Christ should be.
        </Text>

        <Text style={styles.subtitle}>A. MATERIALS USED</Text>
        <Text style={styles.content}>
          1. <Text>The Donkey (Ass): Jesus rode on a donkey as he entered Jerusalem for the Triumphant Entry. This 	was in fulfillment of Zechariah's prophecy (Zechariah 9: 9). The donkey is a service animal used to 	carry loads. It symbolized the willingness of Jesus to serve and carry all the burdens of all mankind 	(Luke 19:10). How willing are we today to offer ourselves and our belongings in service to God?</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Garments: These were spread on the road for Jesus to ride on.The Jews usually spread their 	garments on the road for very important personalities to show love, respect, submission and 	honour. They also give their garments and swords to a person they surrender to (1 Samuel 18: 4). 	Christ is worthy of our love, honour and total submission. How surrendered in love and honour are 	you to Jesus?
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Palm Tree Leaves: Palm tree leaves were used by the Jewish people to welcome and celebrate 	returning armies and won the battle. Ity was a symbol of name victory. Even though Jesus had not 	died and risen from death, conquered their enemies the actions of the disciples showed of Jesus 	over death and sin. For us, we celebrate the victorious</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Songs of Hosanna: The disciples praised God in songs singing Hosanna.. Hosanna was often used 	used in songs during the feast of Tabernacle to praise God and was s also recorded in Psalm118:25. 	Hosanna means 'save now'. They people people sang expecting Jesus to save them politically from 	the Roman Government. Jesus however came for a different purpose; to save mankind from their
            sins (Luke 19:10). Each word in the Hosanna song has deep meaning :

            •	Blessed: mentioned in all the gospels means happiness praise and congratulations to a person to be envied.
            •	King of lsrael: refers to the Kingship of Jesus. He was of David's lineage. Even though the Israelites did not accept Him as their King then, He would rule over them in the future.
            •	Comes in the name of the Lord. This shows Christ's Kingship comes from God, not men. God has ordained Him and He will be established in the future.
          </Text>
        </Text>
        
        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>:People with willing hearts praised Jesus Christ with their possessions. They did it willingly and joyfully testifying of His good works in their lives. May that be so of us this season and always in Jesus name.</Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: Matthew 21:9</Text>
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

export default page15;
