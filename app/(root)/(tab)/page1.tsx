import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Page1 = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
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
                    <strong>INTRODUCTION:</strong> The beginning of a new year is a good time to re-evaluate our
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
                    1. <strong>Inner Peace:</strong> Personal peace of the mind expressed by physical and spiritual calmness. amidst turmoil or potential stressors. It is not equal to a problem-free
                    life. We all go through challenges in life.

                </Text>
                <Text style={styles.content}>
                    2. <strong>Marital Peace:</strong> The peace enjoyed in marriage with one’s spouse, children and even the extended family.
                    It is fundamental to enjoying other types of peace.

                </Text>
                <Text style={styles.content}>
                    3. <strong>Mental Peace:</strong> The peace of our mental health. It is necessary for our cognitive and emotional well-being. Absence of mental health can have
                    a negative effect on our physical health.

                </Text>
                <Text style={styles.content}>
                    4. <strong>Environmental Peace:</strong> is for a community to be safe and free from harm. There are countries and states
                    where investors do not go because of insecurity and violence. A peaceful environment contributes in no small
                    measure to the total wellness of its inhabitants. When it is lacking, prospective investors keep their
                    businesses away from the environment.
                </Text>
                <Text style={styles.content}>
                    5.⁠ <strong>⁠Body/medical:</strong> Peace is the state of wellness in our health. John prays this type of peace for Gaius (3 John v.2), wishing that he would prosper in his
                    health. God cares for our health.

                </Text>

                <Text style={styles.subtitle}>B. FACTORS THAT MILITATE AGAINST PEACE</Text>
                <Text style={styles.content}>
                    1. <strong>Sin (Isaiah 48:22):</strong> It is surprising that even those who cause crises and bring chaos also want peace! God is
                    however unequivocal about it: there is no peace for the wicked. Sin is the root cause of chaos and turmoil
                </Text>
                <Text style={styles.content}>
                    2. <strong>Hatred & Bitterness (Ephesians 4:31-32):</strong> Christians who allow bitterness, rage, anger and harsh words in their relationship with
                    others grieve the Holy Spirit (Ephesians 4: 30).Besides,they also open up their lives for crises.
                </Text>
                <Text style={styles.content}>

                    3.⁠ <strong>Satan and his cohorts (1 Peter 5:8): </strong> The devil, believers’ arch enemy, comes to steal, kill and destroy anything that 
                    contributes to our abundant living. He tries to destroy our inner, mental, marital, environmental and medical peace. We are to be at alert!


                </Text>

                <Text style={styles.subtitle}>C. STEPS TO GUARANTEE ALL-ENCOMPASSING PEACE</Text>
                <Text style={styles.content}>
                    1. **Be Born Again (John 3:3):** A child of God enjoys peace that comes from being forgiven...
                </Text>
                <Text style={styles.content}>
                    2. **Pray Consistently (Philippians 4:6-7):** Believers are commanded to turn worries into prayer...
                </Text>

                <Text style={styles.subtitle}>CONCLUSION</Text>
                <Text style={styles.content}>
                    As the Lord leads us through the year, let us take deliberate steps to avoid whatever can hinder
                    our peaceful relationship with God and man...
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
