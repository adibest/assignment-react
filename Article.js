import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';

export default class Article extends Component {

	state = {
		like: false,
	};

	likeHandle() {
		this.setState({
			like: !this.state.like
		});
	}

	render() {

		return(
				<View style={styles.wrapper}>
					<Image
						style={{width: 210, height: 210}}
						source={ this.props.image }
					/>
					<View style={{flexDirection: 'row'}}>
						<TouchableWithoutFeedback
							onPress={() => this.likeHandle()}
						>
							<Image
								style={{width: 20, height: 20}}
								source={{uri: this.state.like ? 'https://cdn2.iconfinder.com/data/icons/pittogrammi/142/80-512.png' : 'http://cdn.onlinewebfonts.com/svg/img_202778.png'}}
							/>
						</TouchableWithoutFeedback>
						<Text style={styles.title}>
							{ this.props.title }
						</Text>
					</View>
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
		fontSize: 18,
	},
	sentences: {
		fontSize: 12,
	}
})