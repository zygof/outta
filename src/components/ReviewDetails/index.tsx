import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../theme/styles/global';
import Card from '../Card';

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>
                    {navigation.getParam('title')}
                </Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});