import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import Button from '../shared/Button';
import Input from '../shared/Input';

const socket = io('https://realtime1205.herokuapp.com/');

export default class Chat extends Component {
    state = { txtMessage: '', lastMessage: [] }

    componentDidMount() {
        socket.on('SERVER_SEND_MESSAGE', data => this.setState({ lastMessage: data }));
    }

    sendMessage = () => {
        socket.emit('CLIENT_SEND_MESSAGE', this.state.txtMessage);
        this.setState({ txtMessage: '' });
    }

    render() {
        const { txtMessage, lastMessage } = this.state
        return (
            <View style={styles.container}>
                <Text style={{ color: '#565D61' }}>{ lastMessage? lastMessage : 'Waiting for messages' }</Text>
                <Input
                    placeholder="Enter your message here"
                    value={txtMessage}
                    onChangeText={text => this.setState({ txtMessage: text })}
                />
                <Button
                    title="Send Message"
                    type="success"
                    onPress={this.sendMessage}
                />
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFB6D3'
    }
});