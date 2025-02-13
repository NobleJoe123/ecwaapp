import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page9 = () => {
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
        <Text style={styles.tit}>Lesson 9: CREATING PASSION FOR SOUL WINNING IN YOUNGER GENERATION</Text>
        <Text style={styles.tit}>Text: Matthew 28: 18-20.</Text>
        <Text style={styles.tit}>Aim: That Christian Youths may be passionate and committed to mission work.</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> The coming of Jesus to rapture the Church is imminent, yet not many people are prepared. Biblical predictions and prophecies foretold by the Master are all being fulfilled in our day and
          point to the soon imminent rapture of the Church. The Church howeyer seems to be fast asleep. One end-time prediction of Jesus is that the Gospel of the Kingdom will be preached in the Nations of the world and then the end shall come (Matthew 24: 14). That same gospel is becoming unpopular today. Many preachers are laying little or no emphasis on the subject of soul winning. Of serious concern is the fact that the younger generation upon whose shoulder lies the future of the Church, seems to be less interested and have little passion for evangelism.
          .

        </Text>

        <Text style={styles.subtitle}>A.  WHAT MAKES EVANGELISM OUR MANDATE (Matthew 28: 18-20) </Text>
        <Text style={styles.content}><Text>Jesus' last command to us in Matthew was the great commission and He gave us all it will take to fulfill this. We therefore have no excuse for failing.
        </Text>
          1. <Text>Rebellion of man and total depravity of His heart (Genesis 6: 5-7). Man, made in the image of God rebelled and took on the image of Satan.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>God's love manifested (John 3: 16, 17, 36). What moved God to make provision for the salvation of man is His love for us shown in the work of His son on the cross.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Jesus' ultimate sacrifice (Romans 5: 8). If we understand what it cost the Lord to purchase us from sin and perdition, we would have a burning desire for the lost.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>The Great Commission is imperative (Mark 16: 15- 20). The directive given by the Lord was mandatory, not advisory.

          </Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Believers' position (1 Corinthians 9: 16; Acts 4: 20; 2 Corinthians 5: 18- 20). We are God's ambassadors and representatives to the world.

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>. God supplied us with the power for the task already (Acts 1: 8). No one can complain of lack of resources to fulfill the mandate. God has supplied all that we will ever need.

          </Text>
        </Text>
        <Text style={styles.subtitle}>B. HOW TO IGNITE THE PASSION FOR SOUL WINNING IN OUR YOUTHS
        </Text>

        <Text style={styles.content}>
          1. <Text>	Preach the Gospel of Salvation to the youths (John 15: 16). To enlist the youths in soul winning, they first must be saved by hearing the gospel message.
            You can only give what you have.
          </Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>Repositioning the pulpit to return to the core message of Christ (Luke 19: 10). Our pulpits (preachers) must return to preaching Jesus and His purpose for coming;
            to seek and to save the lost by calling them to a life surrendered to Jesus.
          </Text>

        </Text>
        <Text style={styles.content}>
          3. <Text> Lead them through discipleship process that emphasizes the core value of our faith in Christ (Matthew 6: 33). It is not enough to preach, the souls won to the Lord must be discipled to become like Jesus. When we fail to disciple souls, it is like planting seeds and leaving them to grow without necessary cultivation.</Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>Pointing the youths to the source of spiritual power and its usefulness (Acts 1: 8). Young people need to be enlightened as to the true source and essence of spiritual power which is to be witnesses for Jesus.
          </Text>

        </Text>
        <Text style={styles.content}>
          5. <Text>Invite missionaries to share their experiences of working in mission fields and in bringing souls to God's Kingdom. Ensure the young attend such meetings. These reports can encourage the youth and others in engaging in missionary work.
          </Text>

        </Text>
        <Text style={styles.content}>
          6. <Text>. Get them involved in practical witnessing (Luke 9:1-2; 10: 1-3).
            Jesus demonstrated this on many occasions as He sent His disciples on outreaches to declare the message of the kingdom.


          </Text>

        </Text>
        <Text style={styles.content}>
          7. <Text>. Making them understand that spiritual manifestations are signs intended to draw unbelievers to the Saviour (Mark 16: 20 Galatians 5: 22, 23).
          </Text>

        </Text>
        <Text style={styles.content}>
          8. <Text>Church leadership should prepare to finance evangelical outreaches involving youths. Understanding the youths and supporting themn in kingdom missions like outreaches and evangelism will go a long way to motivate then into soul winning.
          </Text>

        </Text>
        <Text style={styles.content}>
          9. <Text>. Enlighten them of the reality of persecution, trials and pain in the way (Matthew 10: 16; John 16: 1-3, Acts 12).


          </Text>

        </Text>
        <Text style={styles.content}>
          10. <Text>Assure them of the eternal rewards awaiting soul winners (Daniel 12: 3)
          </Text>

        </Text>
        <Text style={styles.content}>
          11. <Text>The Church should organize short-term mission activities to encourage the young professionals to participate in evangelism outreaches
          </Text>

        </Text>
        <Text style={styles.content}>
          12. <Text>. Plan prayer mobilizations for mission activities and involve the youths.


          </Text>

        </Text>
        

        <Text style={styles.memoryVerse}>Memory Verse: Romans 1: 16</Text>
      </ScrollView>
    </View >
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

export default page9;
