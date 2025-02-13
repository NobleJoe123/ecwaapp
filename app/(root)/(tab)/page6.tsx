import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page6 = () => {
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
        <Text style={styles.tit}>Lesson 6: THE NEW BIRTH PROCESS (Part 2)</Text>
        <Text style={styles.tit}>Text: Matthew 7: 21 -23</Text>
        <Text style={styles.tit}>Aim: That we may know the process Lord Jesus Christ for being born-again</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> A person who has a good knowledee of a matter does not automatically attain the blessings that the matter offers. Often, he has to cross on the bridge (an action, obedience or
          the blessing. The process) that links the knowledge with the Lord Jesus Christ says, "If you know these things, you are blessed if you do them"(John 13:17). So, merely knowing the process of being born-again did nothing in them. does not qualify anyone to enter the Kingdom of God. Everyone has to for the process. Those prominent "Christians" in our Bible text for this lesson failed to follow the process. Consequently, at the end of their following the earthly life, though they were prominent on earth, they were rejected and refused entry into the Kingdom of Heaven. To follow the process is a matter of life and death!

        </Text>

        <Text style={styles.subtitle}>A. MERE PROFESSORS OF THE CHRISTIAN FAITH</Text>
        <Text style={styles.content}>
          1. <Text>Sadly, many church people merely profess to be followers of Jesus, while Jesus does not recognize or register them as His followers because they are not "born of water and the Spirit" (John 3: 5).
          </Text>
        </Text>
        <Text style={styles.subtitle}>BEING BORN OF WATER</Text>
        <Text style={styles.content}>
          2a. <Text>In the case of those we read about in Matthew 7: 21 - 23, it is note-worthy that Jesus, who is omniscient, disowned them, saying, "I never knew you!" This certainly meant that they did not meet the ternms and conditions for being born of water and the Spirit. They were tares that looked very much like wheat (Matthew 13: 24-30). The name of Jesus did a lot for them,
          </Text>
        </Text>
        <Text style={styles.content}>
          2b. <Text>Even though they were very reality they were not assets but very active and"useful" to the e Church, in reality they were not assets but liabilities to the Church. That was why, in Verse 23 of our text, Jesus described them as"ye that work iniquity" (KJV); or "you who practise lawlessness" (New American Standard Bible - NASB): or "you who break God's laws' (New Living Translation-NLT); or "you evildoers' (NIV).         </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text> Numerous professing "Christians" are not born-again, yet they manage to entrench themselves in the services and leadership of local churches. Concerning such "Christians," Charles Spurgeon wrote: "Inconsistent professors injure the gospel more than the sneering critic or the infidel!"</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>He blesses them (Isaiah 30: 18). There are general blessings like sunshine, air, rain etc. For everyone, but special blessings come the way of those who wait on God.
          </Text>
        </Text>
        <Text style={styles.subtitle}>B. LIKE A CONTRACTUALAGREEMENT</Text>
        <Text style={styles.content}>

          <Text>The divine terms on which a natural man is translated from his dark prison of sin into the glorious eternal life is comparable to a contractual agreement between two parties.
            For such an agreement to be valid, its document must clearly state: </Text>
        </Text>
        <Text style={styles.content}>
          a. <Text>the names and the residential addresses of the parties in the agreement;
          </Text>

        </Text>
        <Text style={styles.content}>
          b. <Text>the services and favours that each party will give to and receive from the other;
          </Text>

        </Text>
        <Text style={styles.content}>
          c. <Text>the date on which the agreement begins to take effect;</Text>

        </Text>
        <Text style={styles.content}>
          d. <Text> the period of time during which the agreement will be valid;
          </Text>

        </Text>
        <Text style={styles.subtitle}>C. EXCHANGE OF VALUES</Text>
        <Text style={styles.content}>Being born-again involves a similar transaction.
        </Text>
        <Text style={styles.content}>
          1. <Text>The two parties are the sinner on the one hand, and the Lord Jesus Christ on the other.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>The values they exchange are:</Text>
          a. <Text>The SINNER will give up his sinful lifestyle and surrender the control of his life to Jesus Christ as Lord. In exchange, the sinner will receive forgiveness for his sins, freedom from his guilt, a new life that is everlasting,
            and the gift of the HolySpirit to dwell permanently in him.</Text>

          b. <Text>CHRIST has freely given His own life out of love. He died sacrificially for our sins on the cross,
            that the sinner who repents and believes in Him may have eternal life through Him. In return, Christ demands life-long, unalloyed allegiance from the redeemed sinner (2Corinthians 5: 15). </Text>

          c. <Text>This transaction must occur at a point in time. It is dated in the annals of Heaven. For the sinner saved by grace,
            the date of this wonderful experience is unforgettable.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Obviously, all these did not happen in the case of those mere professors of the Christian faith. If they did happen, Jesus would not have said to them:
            "I never knew you; depart from me, you who practise lawlessness" (Matthew 7:23). For them, it was a tragic and irreversible end. But it was preventable by following the process laid down by the Lord Jesus Christ! i everlasting, and thhe gift of the Holy Spirit to dwell permanently in him.
          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION: </Text>
        <Text style={styles.content}>Now that you understand how to be born of water and the Spirit, that kind of tragedy we read in Matthew 7: 23 needs not happen in your life. Therefore, be sure you can answer the following questions in the affirmative: 
        </Text>
        
        1.<Text style={styles.content}>Have you been born of water and the Spirit, as Jesus demands in John 3:5? 
        </Text>
        2.<Text style={styles.content}>Does Jesus know you because He has baptized you through the Holy Spirit into His Body – the invisible Church (1Corinthians 12:13)? Have you become bonded to Him through an agreement?
        </Text>

        <Text style={styles.memoryVerse}>Memory Verse: Mark 1:8</Text>
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

export default page6;
