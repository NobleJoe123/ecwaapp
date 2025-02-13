import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page2 = () => {
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
        <Text style={styles.tit}>Lesson 2: LEANING ON HIS HELP</Text>
        <Text style={styles.tit}>Text: Psalm 23: 1-6</Text>
        <Text style={styles.tit}>Aim: That we may learn to depend on God and His unlimited help to meet our daily needs.</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> According to God's design, everyone needs help. There are two major sources of help. Help from God and that from man.
          The help of man is limited, vain and not reliable. When we make man our sole source of help, it brings curses on us (Psalm 108: 12; Jeremiah 17:5). On the other hand, the help of God is unlimited, glorious and dependable.
          It lasts long and cuts across every aspect of life. It is one of the greatest assets any one can have on earth. lt is important to note
          that you cannot find help until you first secure it with God. To lean on His help therefore means to depend absolutely on God at all times for help in every aspect of life.
        </Text>

        <Text style={styles.subtitle}>A. THE UNLIMITED GOD (Psalm 54:4)</Text>
        <Text style={styles.content}>
          1. <Text>God has unlimited and ultimate power to provide help (1Chronicles 29: 11; Job 42: 2).
            The phrase 'ultimate power' means most important, highest, and superior and that which is in complete control over the entire universe and the resources therein. The phrase also means all powers-financial, material, physical, spiritual, mental, medical etc. The power of God is
            unlimited and ultimate to provide help.</Text>
        </Text>
        <Text style={styles.content}>
          2. <Text> God has unlimited resources to meet our needs (Psalm 24: 1-2; Ephesians 3: 16-19). The resources of God are super-abundant. God demonstrated His unlimited resources when He fed about
            three million Israelites in the wilderness with manna, for forty years and also gave them water and meat. Jesus fed five thousand and four thousand respectively at different times. All these provisions came from God's store house from heaven. Man's resources may be exhausted but not that of God.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text> God has unlimited capacity to provide us with maximum security
            (Deuteronomy 33: 12). Irrespective of the security problems confronting us as a nation, God is able and does watches over His own (Psalm 127:1). As we trust Him for safety in the journey of the year, He will keep guide us in safe paths.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text> God has unlimited wisdom to make us excel (Ephesians 1: 16, 17). God is omniscient. He knows all things. He possesses all wisdom. By wisdom He founded the earth; by understanding He
            established the heavens. Daniel wrote, 'to you belong all wisdom and might... (Daniel 2: 20). He used His wisdom to cause Joseph, Daniel, the three Hebrew young men, Esther, Mordecai to excel
            even in a strange land. If you trust Him, He can make you to excel even in the midst of uncertainty.
          </Text>
        </Text>


        <Text style={styles.subtitle}>B.FORMS OF HUMAN NEEDS (Psalm 54:4)</Text>
        <Text style={styles.content}>
          1. <Text>Human needs are in various forms and differ from person to person and from place to place. They come under this four categories listed below. Can you mention some?
            <Text style={{ fontWeight: 'bold' }}>1. Spiritual needs.</Text>
            <Text style={{ fontWeight: 'bold' }}>2. Physical needs.</Text>
            <Text style={{ fontWeight: 'bold' }}>3. Economic needs.</Text>
            <Text style={{ fontWeight: 'bold' }}>4. Security needs.</Text>
          </Text>
        </Text>


        <Text style={styles.subtitle}>B. STEPS TO SECURING HELP</Text>
        <Text style={styles.content}>

        </Text>
        <Text style={styles.content}>
          1. <Text>Live to please God (Deuteronomy 10: 12). God promises to help those whose lives please Him.</Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>Exercise faith in His word (Hebrews 11:6).
            It takes faith to receive from God. Abraham, Isaac, Jacob, David, Hezekiah and other patriarchs received help by faith. It ta kes faith to receive His help.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Be prayerful (1 Chronicles 16: 11). Prayer opens the door of help from God. In most cases, God delights to see us express confidence in Him to help us. This we do through prayer
            Examples of Bible characters who sought God's help through prayers include- Moses, David, Esther, Paul, Peter, Nehemiah, Gideon etc.
          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Be prayerful (1 Chronicles 16: 11). Prayer opens the door of help from God. In most cases, God delights to see us express confidence in Him to help us. This we do through prayer Examples of Bible characters who sought
            God's help through prayers include- Moses, David, Esther, Paul, Peter, Nehemiah, Gideon etc.

          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Pray Consistently (Philippians 4:6-7):Believers are not immune to conditions that can make them worry about their jobs,
            their homes, their schools, etc. However, we are commanded to turn our worries to prayer. And when we yield to this command,
            we will be opening our hearts to the peace of God which surpasses all understanding.
          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Be devoted to evangelism our commitment to soul-winning brings us God's help (Matthew 28:18- 20). Paul received marvelous help in several instances because
            he was committed to evangelism (Acts 28:2,7, 10).

          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>Be devoted to evangelism our commitment to soul-winning brings us God's help (Matthew 28:18- 20). Paul received marvelous help in several instances because
            he was committed to evangelism (Acts 28:2,7, 10).

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Be merciful (Matthew 5: 7). God is merciful and He treats us so. Like God, every believer is expected to be merciful.
            This should be a lifestyle notjust when seeking for His help.
          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          The journey to a comnfortable and successful life is made possible with God's help irrespective of economic downturns. So put your confidence in God as you begin the journey of the New Year by leaning on Him and His word, and your goal will be achieved (Psalm
          121:1,2).


        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: Psalm 23:1</Text>
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

export default page2;
