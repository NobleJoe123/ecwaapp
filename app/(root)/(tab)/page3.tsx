import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page3 = () => {
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
        <Text style={styles.tit}>Lesson 3: WAITING ON THE LORD</Text>
        <Text style={styles.tit}>Text: Isaiah 40:28-31</Text>
        <Text style={styles.tit}>Aim: That we may learn to depend on God and His unlimited help to meet our daily needsThat we may learn to depend on God by seeking Himthrough prayers as we journey through the New Year.</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> The Hebrew word for wait used by Isaiah is 'Qavah',
          it means to look for, hope and expect. The phrase wait on God' is used of all who feel weak, guilty and helpless and as a result put their trust in God.
          To 'wait on God' therefore means to trust in God, put hope/confidence in Him and to seek for His help. It is quite unfortunate that this generation is drifting away from this fundamental Christian pillar.
        </Text>

        <Text style={styles.subtitle}>A. GOD'S PROMISES FOR THOSE WHO WAIT ON HIM</Text>
        <Text style={styles.content}>
          1. <Text>Strength for the waiter (Isaiah 40: 31). This is the first promise for those who wait on the Lord. God promises renewal, revival, restoration (change)
            and increase in strength in life generally to those who wait on Him
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>He lifts them up (Psalm 73: 24-26). The second blessing for the waiter is lifting. At 17 years, David was anointed but never got to the throne until he was 30. David waited patiently for the Lord
            and God lifted him.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>He answers their prayers (Psalm 34: 3, 4). God promises to answer the prayers of those who wait on Him. He is sovereign; hence, He can choose whatever time to answer. Do not let impatience rob you of your miracles.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>He blesses them (Isaiah 30: 18). There are general blessings like sunshine, air, rain etc. For everyone, but special blessings come the way of those who wait on God.
          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>He protects and secures them (Psalm 46:1). God promises to also protect those who wait on Him for He is our refuge and faithful shepherd.
          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>He raises the level of their spiritual life (Psalm 1: 1-3). We flourish and experience increase spiritually when we dwell God's presence and His word.
          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>He opens their eyes and brings divine ideas to them (Proverbs 3:5-7). God promises to grant access and direction in life's issue to those who wait on Him by the opening of the eyes of their
            heart to give them understanding.

          </Text>
        </Text>



        <Text style={styles.subtitle}>B. HINDRANCES TO WAITING ON GOD</Text>
        <Text style={styles.content}>
          1. <Text>Secret sins (Proverbs 28:13). God is holy and abhors sin, The prayer and services of a sinner are an abomination to God confess every sin (secret or hidden)
            because they hinder waiting on God.</Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>Uncontrolled activities and busyness (Luke 10: 38-42). Time to wait on God must be intentionally
            planned and prepared for or else it will be difficult to wait on Him.</Text>

        </Text>
        <Text style={styles.content}>
          3. <Text>Impatience (Psalm 37:7). It takes patience to wait for God.
            Moses waited until the seventh day on the mountain before God began to speak to him and was there for forty days and nights (Exodus 24: 15, 16). Many people have missed God's direction due to impatience.</Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>Prayerlessness (1 Thessalonians 5: 17). persistent in prayer cannot wait on God and when
            One who is not prayerlessness sets in, waiting on God is suspended.
          </Text>

        </Text>
        <Text style={styles.content}>
          5. <Text>Overeating and too much sleep (Proverbs 23: 20- 21). A believer's life is expected to be characterized by discipline.
            It takes discipline to fast, to eat and sleep moderately (neither
            overeating nor over sleeping).
          </Text>

        </Text>
        <Text style={styles.content}>
          6. <Text>Procrastination (Ephesians 5: 15-16; Ecclesiastes 3: 1). To procrastinate means to be slow, to delay or be late in doing things that should be done. A Christian who procrastinates will find it
            difficult waiting on God in prayers as he will delay in seeking God's face.
          </Text>

        </Text>
        <Text style={styles.content}>
          7. <Text>SDoubt/unbelief (Hebrews 11: 6). It takes faith wait on God.
            It is human to doubt but when a Christian allows doubt to dominate his/her life, such will not be able to wait on God. It takes faith to wait on God. It</Text>

        </Text>
        <Text style={styles.content}>
          8. <Text> Wrong use of phones. technology and its gadgets especially the phone, hinders many
            The wrong use or application of Christians from waiting on God. Many have become so addicted
            to its use and distractions and cannot be away from it for a period of prayer.
          </Text>

        </Text>

        <Text style={styles.subtitle}>C. HOW TO WAIT</Text>
        <Text style={styles.content}>If you are waiting on God, kindly learn how to wait appropriately. The following points describe how:

        </Text>
        <Text style={styles.content}>
          1. <Text>Wait patiently (Psalm 27: 14; Luke 18: 1.) Waiting patiently means to wait until God comes with a word or the answer/desired blessing. For Abraham, it was after 25yrs; David and Joseph- 13years.
        </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>Wait expectantly (Hebrews 11: 6). Like a pregnant woman, the expectant is often excited, hopeful, happy, and prepares to receive. This should be the attitude of a Christian waiting on God.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Wait confidently (Micah 7: 7). Everyone trusting God for admission, job, promotion, spouses, breakthrough and the likes are expected to wait confidently believing that God will never fail.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Wait quietly (Psalm 62: 1). The quietness here does not mean absence of noise or bustle but to be calm, undisturbed, untroubled, un-alarmed, not worried because you have absolute peace within about God's ability.
          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Be Intentional. The waiting time must be engaged in intentionally knowing what God wants of us.          </Text>
        </Text>
        
        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
        Believers must learn the principles of waiting because it is divinely recommended and God has promised to bountifully reward those who wait on Him. Therefore, as Christians we must learn to wait on God through meditating on His word and in constant and continuous prayer so that we can enjoy the best God has in stock for us in the New Year.


        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: Isaiah 40: 31</Text>
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

export default page3;
