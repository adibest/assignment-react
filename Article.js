import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Article extends Component {

	render() {

		return(
				<View style={styles.wrapper}>
					<Text style={styles.title}>
						{ this.props.title }
					</Text>
					<Text style={styles.sentences}>
						{ this.props.sentences }
					</Text>
				</View>
			);

	}

}

const styles = StyleSheet.create({
	wrapper: {
		paddingTop: 5,
		paddingBottom: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#aaaeee',
	},
	title: {
		fontSize: 24,
	},
	sentences: {
		fontSize: 12,
	}
})