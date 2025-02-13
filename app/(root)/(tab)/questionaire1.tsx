import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const questionaire1 = () => {
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
                <Text style={styles.tit}>Questionaire</Text>
            </View>

            {/* Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.content}>
                    <Text style={{ fontWeight: 'bold' }}>Questionaire</Text>
                </Text>
                <Text style={styles.content}>
                    <Text>We give glory to God for the gift of His wod to us. His word is all that we need to get our world transformed.
                        The goal of this questionnaire is to know how these lessons have been helping your Christian life, and to Know whether your Local Church effects necessary changes in response to teachings in ECWA Sunday School Manual 2025.
                    </Text>
                </Text>
                <Text style={styles.content}>
                    <Text>Please feel free to express your personal opinion. Do not write your name or phone number on this Questionnaire. We will keep all responses very confldential.
                    </Text>
                </Text>
                <Text style={styles.content}>
                    1a. <Text>Do you consider any of these lessons difficult to understand? (Yes or No)
                    </Text>
                </Text>
                <Text style={styles.content}>
                    1b. <Text>If yes, state the number(s) and topic (s) of the lesson/lessons.


                    </Text>
                </Text>
                <Text style={styles.content}>
                    1c. <Text>State which aspects of the lesson(s) are difficult to understand?
                    </Text>
                </Text>
                <Text style={styles.content}>
                    2a. <Text>From your participation in the Sunday school lessons, did you feel that some teaching or practice 	in your Local Church needs to be changed? (Yes or No)
                    </Text>
                </Text>
                <Text style={styles.content}>
                    2b. <Text>If your answer in (a) above is yes, specify/explain:

                    </Text>
                </Text>


                <Text style={styles.content}>
                    2c. <Text>What do you think is the reason why those changes have not been effected in your
                        local Church?
                    </Text>

                </Text>
                <Text style={styles.content}>
                    3. <Text>State DCC under which your ECWA Local Church is located:</Text>

                </Text>


                <Text style={styles.subtitle}>THANK YOU FOR EXPRESSING YOUR CANDID OPINION. GOD BLESS YOU.</Text>
                <Text style={[styles.content, { textAlign: 'center' }]}>
                    <Text style={{ fontWeight: 'bold' }}>Please detach this sheet and send\post it in a sealed envelope to:
                        The C.E.0.
                        Christian Education Department,
                        ECWA llorin DCC Office,
                    </Text>


                </Text>

                <Text style={styles.memoryVerse}>Challenge, PMB 1367, lIlorin, Kwara State.{"\n"}
                    Email : dsogunniyi@hotmail.com or ceoecwaidcc@gmail.com
                </Text>
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

export default questionaire1;
