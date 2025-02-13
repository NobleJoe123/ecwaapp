import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page8 = () => {
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
        <Text style={styles.tit}>Lesson 8: THE TRUE GOSPEL.</Text>
        <Text style={styles.tit}>Text: Romans 10:8- 18</Text>
        <Text style={styles.tit}>Aim: That we may learn the Gospel truths that must be communicated and believed in for salvation.</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> One of the most important assignments given to believers (disciples) by the Lord Jesus Christ is the task of winning souls, known as The Great Commission as contained in Mattheww 28: 18- 20.
          The Great Commission is yet to be fulfilled due to a number of reasons. A major reason, which is to be handled here in this lesson, is that the true gospel message has not always been correctly and fuly proclaimed by some (Colossians 4: 2 -4).

        </Text>

        <Text style={styles.subtitle}>A.  THE TRUE GOSPEL(1 Corinthians 15: 1-4)</Text>
        <Text style={styles.content}><Text>The real message of the gospel of salvation is found clearly stated in the above passage. According to the scripture, Jesus Christ died for our sins, was buried, and was raised on the third day. The passage clearly presents the Apostle Paul as a man who received the true gospel and
          afterwards conveyed it to his listeners without diluting it. The whole gospel message as expressed above, is the belief in
        </Text>
          1. <Text>The birth: that He is God incarnate, given birth to by virgin Mary with no male contribution 	to his formation.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>His earthly ministry: He lived on earth, related with people, performed miracles, and was a 	great teacher.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>His death: as prophesied in the Old Testament, He died after experiencing agony and pains 	in the hands of men.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>His resurrection: on the third day after His death, He resurrected from the grave, having 	conquered death (1 Corinthians 15: 54-57) and</Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>His Ascension: the Lord Jesus Christ, after His resurrection from
            death, ascended to heaven with eyes beholding him (Acts 1:9-11).
            This implies that the totality of the Irue Gospel is centred on the redemptive work of Christ for mankind.

          </Text>
        </Text>
        <Text style={styles.subtitle}>B. THE SIGNIFICANT TRUTHS TO BE COMMUNICATED AND BELIEVED
        </Text>

        <Text style={styles.content}>
          1. <Text>	Jesus is God (Matthew 16: 15 - 16; John 10:30).
          </Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>Jesus is the Messiah (Saviour) (Isaiah 61: 1-2; 7: 14).
          </Text>

        </Text>
        <Text style={styles.content}>
          3. <Text>Apart from Christ, man is utterly lost in sins, helpless and doomed to destruction (Acts 4:12).</Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>Jesus did not die for His sins but ours. He was sinless: and he paid the penalty for our sins (2 	Corinthians 5:21).
          </Text>

        </Text>
        <Text style={styles.content}>
          5. <Text>Jesus died physically and was bodily resurrected in order break the power of sin and Satan 	(Hebrews 2:14, 15).
          </Text>

        </Text>
        <Text style={styles.content}>
          6. <Text>Jesus' shed blood on the cross provides the only sacrifice acceptable to God for the forgiveness of 	sins, redemption frorm bondage to sin, and reconciliation of man's broken relationshin to 	God(Ephesians 1:7; Hebrews 9: 12).
          </Text>

        </Text>
        <Text style={styles.content}>
          7. <Text>Jesus' death on the cross was motivated by God's love (John 3: 16).
          </Text>

        </Text>
        <Text style={styles.content}>
          8. <Text>Jesus is the only way to salvation (John 14:6).
          </Text>

        </Text>
        <Text style={styles.subtitle}>C. THE REQUIREMENTS FOR SALVATION</Text>

        <Text style={styles.content}>
          1. <Text>GTo hear the Word of God is essential for a person to be saved (Romans 10: 17); 
            Every one given birth to through the union of a man and woman is born a sinner and as such, doomed for condemnation based on the inherited or original sin of all mankind from Adam. As a result of this, the provision of an "escape route" through the Gospel message is made.
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>There must be a personal decision to receive and believe by faith the salvation provided by Jesus Christ (John 3: 3): This is the second requirement. 
            The personal decision, freewill of each person to choose to accept Christ and believe in the salvation provided (John 3:16). hinged on the
          </Text>
          <Text style={styles.content}>
            3. <Text>Repent from one's sins, forsake them and l chose to live a holy life: This is the third requirement. 
              One must turn away from a life of sin by the help of the Holy Spirit and daily follow the Lord in the new life of holiness and righteousness as revealed in the word of God (Romans 12: 1, 2; 1 Peter 1:15). </Text>
          </Text>
        
        </Text>

        <Text style={styles.subtitle}>CONCLUSION: The summary of these steps is as stated in Romans 10:9:</Text>

        <Text style={styles.content}>
          1. <Text>Confess with your mouth "Jesus is Lord."
          </Text>
        </Text>
        <Text style={styles.content}>
          2. <Text>believe in your heart that God raised him from the dead.</Text>
    
        </Text>


        <Text style={styles.memoryVerse}>Memory Verse: Acts 4:12</Text>
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

export default page8;
