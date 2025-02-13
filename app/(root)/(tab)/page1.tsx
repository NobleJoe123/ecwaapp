import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Page1 = () => {
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
                <Text style={styles.tit}>Lesson 1: ALL ENCOMPASSING PEACE</Text>
                <Text style={styles.tit}>Text: Isaiah 26:1-10</Text>
                <Text style={styles.tit}>Aim: That we may learn how to access and enjoy God's peace all year round.</Text>
            </View>

            {/* Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.content}>
                    <Text style={{ fontWeight: 'bold' }}>INTRODUCTION:</Text> The beginning of a new year is a good time to re-evaluate our
                    commitments and pursuit of peace in all ramifications. “Peace” (shalom in Hebrew)
                    means much more than a cessation of war. It includes blessings such as wholeness,
                    health, quietness of the soul, preservation, and completeness. Living in
                    peace was of paramount Importance to the Jews and to the early church.
                    Little wonder, Paul prayed that peace be multiplied to the recipients of his 13 epistles. Peter and John also prayed
                    the same prayer, as we see in 1 Peter 1:2;2 Peter 1:2 and Revelations 1:4. This indicates
                    the believer’s need for all-encompassing peace. Thus, our desire should not only be to have the
                    true peace which God alone offers, we must also seek to understand biblical guides on how
                    to access and enjoy that peace for every disciple of Christ (John 14:27).

                </Text>

                <Text style={styles.subtitle}>A. TYPES OF PEACE</Text>
                <Text style={styles.content}>
                    1. <Text style={{ fontWeight: 'bold' }}>Inner Peace:</Text> Personal peace of the mind expressed by physical and spiritual calmness. amidst turmoil or potential stressors. It is not equal to a problem-free
                    life. We all go through challenges in life.

                </Text>
                <Text style={styles.content}>
                    2. <Text style={{ fontWeight: 'bold' }}>Marital Peace:</Text> The peace enjoyed in marriage with one’s spouse, children and even the extended family.
                    It is fundamental to enjoying other types of peace.

                </Text>
                <Text style={styles.content}>
                    3. <Text style={{ fontWeight: 'bold' }}>Mental Peace:</Text> The peace of our mental health. It is necessary for our cognitive and emotional well-being. Absence of mental health can have
                    a negative effect on our physical health.

                </Text>
                <Text style={styles.content}>
                    4. <Text style={{ fontWeight: 'bold' }}>Environmental Peace:</Text> is for a community to be safe and free from harm. There are countries and states
                    where investors do not go because of insecurity and violence. A peaceful environment contributes in no small
                    measure to the total wellness of its inhabitants. When it is lacking, prospective investors keep their
                    businesses away from the environment.
                </Text>
                <Text style={styles.content}>
                    5.⁠ <Text style={{ fontWeight: 'bold' }}>⁠Body/medical:</Text> is the state of wellness in our health. John prays this type of peace for Gaius 
                    (3 John v.2), wishing that he would prosper in his health. God cares for our health.
                </Text>

                <Text style={styles.subtitle}>B. FACTORS THAT MILITATE AGAINST PEACE</Text>
                <Text style={styles.content}>
                    1. <Text style={{ fontWeight: 'bold' }}>Sin (Isaiah 48:22):</Text> It is surprising that even those who cause crises and bring chaos also want peace! God is
                    however unequivocal about it: there is no peace for the wicked. Sin is the root cause of chaos and turmoil
                </Text>
                <Text style={styles.content}>
                    2. <Text style={{ fontWeight: 'bold' }}>Hatred & Bitterness (Ephesians 4:31-32):</Text> Christians who allow bitterness, rage, anger and harsh words in their relationship with
                    others grieve the Holy Spirit (Ephesians 4: 30).Besides,they also open up their lives for crises.
                </Text>
                <Text style={styles.content}>

                    3.⁠ <Text style={{ fontWeight: 'bold' }}>Satan and his cohorts (1 Peter 5:8): </Text> The devil, believers’ arch enemy, comes to steal, kill and destroy anything that 
                    contributes to our abundant living. He tries to destroy our inner, mental, marital, environmental and medical peace. We are to be at alert!


                </Text>
                <Text style={styles.content}>

                    4.⁠ <Text style={{ fontWeight: 'bold' }}>⁠Ignorance (Hosea 4:6): </Text> TThe place of knowledge in enjoying total wellness cannot be over-emphasized. Our lack of the 
                        knowledge of God, of ourselves, our environment, our marriage, etc., or our wrong application of such knowledge, also affects 
                        our peace. For us to enjoy peace, it is necessary for us to know and rightly apply our knowledge in these areas.
                </Text>
                <Text style={styles.content}>

                    5.⁠ <Text style={{ fontWeight: 'bold' }}>⁠Ungodly government policies (Exodus 1:8 - 16): </Text> Though we have limited influence on ungodly government policies, they affect us.
                        The Israelites suffered hardship under Pharaoh who decreed that their newly-born male children be killed. Prayer is one of the
                        greatest weapons of believers in such situations, as we see from the example of Daniel in Daniel 6:10.

                </Text>

                <Text style={styles.subtitle}>C. STEPS TO GUARANTEE ALL-ENCOMPASSING PEACE</Text>
                <Text style={styles.content}>
                People search for peace when in financial, religious, communal or political conflict. However, there are steps we can take to 
                give us the kind of confidence expressed by a song-writer who declares. "in the hollow of His (God's) hand! 
                I am safe whatever may betide me." he steps include:

                </Text>
                <Text style={styles.content}>
                    1. <Text style={{ fontWeight: 'bold' }}>Be Born Again (John 3:3):</Text> A child of God enjoys peace that comes from being forgiven. his sins and being made right with God. As he faces daily 
                        problems and temptations of life, he Continues to overcome through the power available in Christ (Romans 5:1).

                </Text>
                <Text style={styles.content}>
                    2. <Text style={{ fontWeight: 'bold' }}>Turn away from sinful habits (Acts 3:19):</Text> Since there can be no righteousness apart from salvation through Christ (Romans 3:21-31), there can be no true peace apart from righteousness
                    (Isaiah 32:17). Turning towards righteousness makes believers enjoy peace.

                </Text>
                <Text style={styles.content}>
                    3. <Text style={{ fontWeight: 'bold' }}>Know God and His promises in His word (lIsaiah 26:3): </Text> When we grow in the love and knowledge of God, we are empowered to set our minds on Him even in turmoil. Isaiah 
                        emphasized that perfect peace comes to those whose thoughts are fixed on God.

                </Text>
                <Text style={styles.content}>
                    4. <Text style={{ fontWeight: 'bold' }}>Develop faith in Biblical promises (Psalm 125:1 -2; 2 Peter 3:18):</Text> God’s promises are “Yes and Amen” and His words donot fail. So, the secret to a believer’s stability is to trust God’s words. 
                        This means that we must study, memorize, obey attached conditions and declare His promises to your situation.



                </Text>
                <Text style={styles.content}>
                    5. <Text style={{ fontWeight: 'bold' }}>Pray Consistently (Philippians 4:6-7):</Text> Believers are not immune to conditions that can make them worry about their jobs, 
                        their homes, their schools, etc. However, we are commanded to turn our worries to prayer. And when we yield to this command, 
                        we will be opening our hearts to the peace of God which surpasses all understanding.

                </Text>
                <Text style={styles.content}>
                    6. <Text style={{ fontWeight: 'bold' }}>Pursue peace with all people (Hebrew 12:14, 15):</Text> A right relationship with God leads to right relationship with fellow
                    believers. Although we may not always feel love towards all other
                    believers, we must pursue peace as we become more Christ-like (Romans 12:18).


                </Text>

                <Text style={styles.subtitle}>CONCLUSION</Text>
                <Text style={styles.content}>
                    As the Lord leads us through the year, let us take deliberate steps to avoid whatever can hinder
                    our peaceful relationship with God and man.And let us not hesitate to pray for the peace of
                    Nigeria as we are in a critical season of insecurity threatening our peaceful existence as a nation (Psalm 122:6).

                </Text>

                <Text style={styles.memoryVerse}>Memory Verse: Philippians 4:7</Text>
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

export default Page1;
