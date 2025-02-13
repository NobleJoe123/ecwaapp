import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page11 = () => {
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
        <Text style={styles.tit}>Lesson 11:  A VOICE FOR THE VOICELESS (Part 1)</Text>
        <Text style={styles.tit}>Text: Psalms 82:1-4</Text>
        <Text style={styles.tit}>Aim: That we may realize that defending the cause of the voiceless in the society is one of the social
          responsibilities of every Christian.

        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>The importance of speaking up for the voiceless cannot be overemphasized. Examples of this are found in both the Old and the New Testaments. 
          We see Moses, who appeared before King Pharaoh and spoke up for his people who were being oppressed in Egypt. We also see Jesus, who confronted the religious leaders of his time and became a voice for the oppressed and the marginalized in Israel. 
          In like manner today, we are caled to rise up and be voices for the voiceless around us.
        </Text>

        <Text style={styles.subtitle}>A. WHATITMEANS TO BE A VOICE FORTHE VOICELESS</Text>
        <Text style={styles.content}>
          1. <Text>It is a phrase that is often used to describe a person or organization that advocates for those who 	are marginalized or oppressed and do not have a platform to speak for themselves.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>It means standing out against injustice and advocating on behalf of others.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>It means speaking up when you see something that is not right or fair, even if it may be 	uncomfortable or unpopular.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>It refers to advocating or defending the right and interests of individuals or groups who are 	unable to defend themselves due to various reasons, such as lack of resources, power, or 	representation.</Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Being a voice for the voiceless can take the form of activism, journalism, legal representation or 	other form of advocacy that I dignity for all is aimed at promoting equality, justice, and is aimed 	at promoting equality, justice, and dignity for all people.

          </Text>
        </Text>
        <Text style={styles.subtitle}>B. SOME EXAMPLESOF THE VoICELESSIN THE SOCIETY
          <Text>The voiceless are those who lack ,or platforms to speak up for themselves. Often their needs and 	not heard. These include:</Text>
        </Text>

        <Text style={styles.content}>
          1. <Text>	The poor and the homeless: This group often discrimination and struggle to access basic 	necessities food, shelter and health care.
          </Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>The needy and the orphans: In Bible times, the weak such as the needy, the orphans etc. were 	seen as those who those who added little value to the community. They were not allowed a voice 	at the public square.


          </Text>

        </Text>
        <Text style={styles.content}>
          3. <Text>The widows: This group of people often faces a lot of frustrations when they lose their spouses. 	Most times, these frustrations come from their immediate in-laws or the either their </Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>Women: They face gender-based violence and discrimination and are often not included in 	decision-making processes.
          </Text>

        </Text>
        <Text style={styles.content}>
          5. <Text>Children: They lack the ability to make decisions on their own.
          </Text>

        </Text>
        <Text style={styles.content}>
          6. <Text>People with disabilities: These people face physical, social, and economic barriers to accessing 	education, employment and healthcare.


          </Text>

        </Text>
        <Text style={styles.content}>
          7. <Text>Others include the forgotten, the oppressed, the downcast, the marginalized, and even animals 	that are often subjected tounfair treatment, including abuse, neglect and exploitation, and lack the 	ability to advocate for their own welfare. It is important to say that animals too do feel pain when 	maltreated (Proverbs 12:10)
          </Text>

        </Text>


        <Text style={styles.memoryVerse}>Memory Verse: Proverbs 31:9</Text>
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

export default page11;
