import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page16 = () => {
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
        <Text style={styles.tit}>Lesson 16: JESUS, THE LAMB OF GOD

        </Text>
        <Text style={styles.tit}>Text: John 1:29-34</Text>
        <Text style={styles.tit}>Aim: That we may learn to use our possessions to praise and honour Jesus.

        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>The Bible has so many names and images for Jesus. One not in common use today is the name 'The Lamb of God'. This may not be unconnected with the fact that in the contemporary world, a lamb is seen as frail, helpless, warm and a woolly animal. Simply put, it does not represent that which holds much significance. Without the sacrifice of lambs in the temple and the offering of their blood, worship for the Jew was of no significance. It was the blood poured out on the altar that was offered as sacrifice to cover their sin. In the laying down of Jesus' life to die for us and the shedding of His blood for us at Calvary, God gave Jesus as a lamnb to be offered for our redemption and the forgiveness of our sins (Ephesians 1: 7).
        </Text>

        <Text style={styles.subtitle}>A. THE IDENTITY OFA LAMB</Text>
        <Text style={styles.content}>
          1. <Text>A lamb is a young sheep that is about a year and whose flesh is eaten as meat when sacrificed.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Metaphorically, a lamb is used to refer to a person who is easily cheated or outsmarted.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>A lamb symbolizes gentleness, meekness, innocence, purity, sweetness, forgiveness, harmless, love 	and friendship.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>The term "Lamb of God" also refers to the Passover Lamb. Jesus is our Passover Lamb (1 	Corinthians 5: 7b).


          </Text>
        </Text>
        <Text style={styles.subtitle}>B. THE FIGURES OF LAMB IN THE BIBLE</Text>
        <Text style={styles.content}><Text>There are four instances in the Bible where lambs are used for description: These are</Text>
          1. <Text>The Passover lamb: Christ is the ultimate fulfillment of the Passover lamb (1 Corinthians 5: 7).</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Sacrificial lambs used for the following:
            a.	Sin-offering lamb (Numbers 6: 14: Hebrews 9: 13).
            b.	Guilt offering: (Leviticus 21; Number 5: 8 Ezra 10:19).
            c.	Lambs used for Morning and Evening sacrifices (Exodus 29:38-42).
            d.	The Ram of Genesis 22: 13: In Abraham tells his son that a lamb will be provided for the sacrifice 	they were to make.
            e.	Other Sacrificial Lambs: These include lambs that were Genesis 22: 8, offered at the ordination of 	a priest (Exodus the birth of a child (Leviticus 12:6) at the cleansing of a leper (Leviticus 14: 10); 	at the harvest festival  Leviticus 23:12) and in connection with a vow (Number 15:5).



          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The lamb of Isaiah 53: Christ is the fulfillment of Isaiah 53.He is the sufferer and the sin bearer as 	the Lamb of God who takes away the sins of the whole world</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Israel as a flock: The image of Israel as a flock and the sheep of God's pasture were quite common 	in the Old Testament (Number 27:17; Isaiah 63: 11; Psalm 23; 77: 20).


          </Text>
        </Text>
        <Text style={styles.subtitle}>C. JESUS AS THE LAMB OF GOD</Text>
        <Text style={styles.content}>
          1. <Text>Jesus was declared as the Lamb of God who takes away the sins of the world (John 1: 29).</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Jesus willingly offered His body as a sacrifice for our sin (Hebrews 10:5-10).
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Jesus as the Lamb, came as sin (1 Peter 3: 18;2 Corinthians 5: 21).</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>As the Lamb of God, Jesus was willing to be sacrificed. Never did a lamb go willingly to the 	sacrificial altar,  except the Lord Jesus Christ. He not only became our substitute, but He was a 	joyful and willing substitute! He did not protest in His suffering (John 10:11, 15, 17 – 18).


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>As our sacrificial lamb, His sacrifice was once and perfect forever (Hebrews 10: 14).


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Only the blood of Jesus Christ is acceptable and sufficient for the cleansing of sin and for our 	redemption (Ephesians 1:7; Hebrews 10:4).


          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>By His sacrificial death on the cross as the Lamb of God, Jesus paid the price for sin so that all 	men who put their trust in Him will be saved (Romans 6: 23, 1 Peter 1: 18-21).


          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>Without the shedding of blood, there will be no remission of sins (Hebrews 9: 24). This the blood of bulls and rams could not do as the sacrifices were repeated every year. But thanks be to Jesus, who gave Himself as the Lamb of God that was found worthy to be slain (Revelations 5: 12). Let us conclude by singing. "Worthy, worthy is the Lamb, that was slain".</Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: John 1:29</Text>
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

export default page16;
