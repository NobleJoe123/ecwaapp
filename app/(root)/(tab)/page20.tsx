import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page20 = () => {
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
        <Text style={styles.tit}>Lesson 20: 	MAINTAINING A FAMILY ALTAR

        </Text>
        <Text style={styles.tit}>Text: Deuteronomy 11: 18-23</Text>
        <Text style={styles.tit}>Aim:That believers may rekindle the fire of our family altare
          in order to enjoy the blessings of God in our families.



        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>According to Merriam Webster r dictionary, an altar is a raised structure, place or table on which sacrifices sare offered or incense is burned in worship. Therefore a family altar in simple language connotes a place where a family meets with God to commune with Him to offer Him their worship.



        </Text>

        <Text style={styles.subtitle}>A. ADVANTAGES OF MAINTAINING AN EFFECTIVE FAMILY ALTAR</Text>
        <Text style={styles.content}>
          1. <Text>It brings the family members together in the presence of God their Maker (Psalm 133: 1).</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>It provides family members the joint opportunity to hear God's voice and to receive instructions for 	growth in all aspects of the family life (Matthew4:4).
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>It is a place of training for the young ones; a school where spiritual things are learnt. This is very 	fundamental to the spiritual growth of every child (Deuteronomy 6: 6-8).</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>It is a place that provides the opportunity for offences to be settled, issues to be resolved and new 	decisions taken which will foster progress, peace and unity (Matthew 5: 23, 24).


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>It is a place of intercession, affording membes the opportunity to present the requests of others and 	other general concerns to God (Ezekiel 22:30).


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>It is a place where prayer burdens are shared and lifted up to God in prayer and this promotes 	oneness (Philippians 4: 6, 7).


          </Text>
        </Text>
        <Text style={styles.content}>
          7. <Text>It is a place that helps in the shaping of destinies of family members and 	the family as a whole 	(Genesis 24: 60).




          </Text>
        </Text>

        <Text style={styles.subtitle}>B. DANGERS OF NOT OPERATING A FAMILY ALTAR</Text>
        <Text style={styles.content}>

          1. <Text>It is a disobedience to the law of God as Christian families are expected to commune with God by 	covenant relationship (Deuteronomy 11: 27, 28).</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>The spiritual growth of members will be limited because failure to commune with God is to 	disconnect the family from the source of life from whom al blessings flow (Ezekiel 18: 2-4).</Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The family is prone to the attack of the devil because when it fails in this regard, it leaves itself 	open to influences from the enemy (Ephesians 6: 11-13).</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>The unity of the family will be hampered as praying families stay together bonded in the spirit and 	in faith (Romans 8: 4-6).


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Families that do not observe the family altar will lack God's abiding presence and the true 	blessings of God (Jeremiah 2: 13).


          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>The culture of corporate family prayer will not be transmitted to the next generation as the family 	altar is where this culture is formed (Deuteronomy 6:6-9).




          </Text>
        </Text>

        <Text style={styles.subtitle}>C.HOW TO MAINTAIN A FAMILY ALTAR</Text>
        <Text style={styles.content}>
          1. <Text>Prepare a place where the family meets with God in devotion (2 Chronicles 7:16).</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Set a time for both the morning devotion and the evening prayer and no activity should be allowed 	to interfere with this except for situations that can't be helped (Ecclesiastes 3: 1).
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>The Bible and other devotional materials like devotional notes, hymn books, musical instruments, 	etc. should be handy for family members.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Involve every family membe, including maids because everyone is important before God and has 	something significant to  contribute towards the spiritual vitality of other members of the family.


          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>A short devotional service may be organized thus having the following:
            i.a brief opening prayer to invite the presence of God into the meeting
            ii. singing of praise songs/Hymn
            iii. reading through the Bible and devotional commentary
            iv. discussion and interaction aimed at explaining the text
            v. sharing prayer requests so that such can be presented to God in prayers 
            vi. closing prayers and benediction.

            All of these must be done being time conscious. Too much time should not be spent to the point that it will affect other activities of the day or night.



          </Text>
        </Text>


        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>Without a vibrant family altar we cannot reap the benefits and blessings of God in our families. As Christian families, we ought to be serious with the family altar. Any family that is not serious with the family altar is taking a dangerous path that will affect the destiny of the family. So we must all work at maintaining the family altar for maximum spiritual benefits.

          </Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: 	Joshua 1:8</Text>
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

export default page20;
