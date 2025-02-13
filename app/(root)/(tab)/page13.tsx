import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const page13 = () => {
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
        <Text style={styles.tit}>Lesson 13:  EXERCISE CARE WITH THE :CONSUMPTION OF SALT AND SUGAR</Text>
        <Text style={styles.tit}>Text:Proverbs 25:16</Text>
        <Text style={styles.tit}>Aim: That we would learn to exercise consumption of salt and sugar, and be mindful of their effects on our overall health.
        </Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.content}>
          <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text>The discovery of salt and sugar were beautiful discoveries to humanity. But as time went by, medical research began to show that there was the need for consumers to be careful with these two 'white dangers.' Increase in salt intake is associated with increased risk of hypertension, and other health issues around the heart, kidney, and general human health. Increase in sugar intake on the other hand is directly linked to increased risk of diabetes, obesity, and liver disease among others. High intake of both salt and sugar are directly linked to medical conditions that pose a threat to healthy living. There is no harm in moderate consumption of salt and sugar, however, reduction in the consumption of both can substantially reduce the risk of these diseased Conditions.
        </Text>

        <Text style={styles.subtitle}>A. SUGAR AND ITS IMPLICATIONS</Text>
        <Text style={styles.content}>
          1. <Text>Sugar occurs naturally in all foods that contain carbohydrates, such as fruits and vegetables, grains, 	and dairy.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>Consuming foods that contain natural sugar is okay.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Too much sugar causes tooth decay.</Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Problemns occur when you consume too much added sugar i.e processed sugar that food 	manufacturers add to products to increase flavour or extend shelf life.</Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Excess sugar is implicated in weight gain, diabetes and cancers.

          </Text>
        </Text>
        <Text style={styles.content}>
          6. <Text>Other sources of additional sugar are from soda, energy and sports drinks, fruit drinks, sweets and 	ready-to-eat cereals.
          </Text>
        </Text>
        <Text style={styles.subtitle}>B. SALT ANDITS IMPLICATIONS
        </Text>

        <Text style={styles.content}>
          1. <Text>	As with many substances consumed in excess, too much salt in your diet can cause health issues.


          </Text>

        </Text>
        <Text style={styles.content}>
          2. <Text>The importance of salt- The human body requires salt (sodium) to function properly. It is involved 	in the transmission of signals from the brain to the nerves and muscles, and also controls fluid 	levels, such as the total blood volume, which subsequently affects blood pressure.


          </Text>

        </Text>
        <Text style={styles.content}>
          3. <Text>Salt also stimulates the adrenal glands that help regulate body metabolism, immune system, blood 	pressure and response to stress.

          </Text>

        </Text>
        <Text style={styles.content}>
          4. <Text>Only a small amount of salt is needed on a daily basis to perform these essential functions.


          </Text>

        </Text>
        <Text style={styles.content}>
          5. <Text>Increased levels of sodium in the bloodstream reduce the kidneys' ability to remove water.
          </Text>

        </Text>
        <Text style={styles.content}>
          6. <Text>Excess intake of salt may lead to high blood pressure which also, may lead to stroke and 	congestive heart failure.


          </Text>

        </Text>
        <Text style={styles.content}>
          7. <Text>As the kidneys constantly work overtime to flush out.excess salt, they can develop kidney disease.
          </Text>

        </Text>
        <Text style={styles.content}>
          8. <Text>Note that many seasonings contain sodium and so, they should be used sparingly.


          </Text>

        </Text>
        <Text style={styles.subtitle}>C. HOW TO MAINTAIN A HEALTHY SALT AND SUGAR INTAKE</Text>
        <Text style={styles.content}>
          1. <Text>The first step in maintaining a healthy level of salt consumption is to know which foods are high in 	sodium. Snacks such as chips, dried seafood or meats, and salted nuts are high in sodium. Often 	canned foods (beans, vegetables, and soups) have added salt in the form of flavour enhancers or 	preservatives, as do pre-packaged foods.</Text>
        </Text>

        <Text style={styles.content}>
          2. <Text>For sugar intake, cut down your consumption rate of sugar usage, sugary drinks, added sugars, and 	read nutrition labels.
          </Text>
        </Text>
        <Text style={styles.content}>
          3. <Text>Eat more of whole foods such as fruits, vegetables, lean proteins and whole grains that are 	naturally low in added sugars.

          </Text>
        </Text>
        <Text style={styles.content}>
          4. <Text>Reduce eating foods (especially fast foods) that are not prepared at home. The amount of salt and 	sugar in foods prepared home can be controlled.</Text>
        </Text>
        <Text style={styles.content}>
          5. <Text>Mention other ways from your experience.

          </Text>
        </Text>

        <Text style={styles.subtitle}>CONCLUSION</Text>
        <Text style={styles.content}>
          <Text>: Keep in mind that high intake of salt (sodium) and sugar have negative effects on your health. Your health care provider can advise on how much salt and sugar is safe for your consumption - whether it is the standard recommended amount or less. This will depend on your health.</Text>
        </Text>



        <Text style={styles.memoryVerse}>Memory Verse: 3 John 1: 2</Text>
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

export default page13;
