import * as React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {Constants} from 'expo';
import PropTypes from "prop-types";
import axios from "axios";


const API_URL = 'https://jsonplaceholder.typicode.com/users'

class ItemList extends React.Component {
    render() {
        const {username, email} = this.props;
        return (
            <Text> El usuario {username} tiene el mail {email} </Text>
        )
    }

}


class ItemsList extends React.Component {

    static propTypes = {
        userData: PropTypes.array
    }

    static defaultProps = {
        userData: []
    }

    renderOrderedList() {
        const _orderedData = [];
        this.props.userData.map((item, index) => {
            _orderedData.push(item.username);
        });
        _orderedData.sort();

        return _orderedData.map((item) => {
            return (<Text>{item}</Text>)
        });
    }

    render() {
        return (
            <View>
                {this.props.userData.map((item, index) => {
                    return (<ItemList username={item.username} email={item.email}/>)
                })}
                <Text> Lista ordenada </Text>
                {this.renderOrderedList()}

            </View>
        )
    }
}


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usersData: []
        }
    }

    componentDidMount() {
        this.fetchUsersData();
    }

    fetchUsersData() {
        axios.get(API_URL)
            .then((response) => {
                // handle success
                this.setState({
                    usersData: response.data
                });
                // console.log(response.data);
            })
            .catch((error) => {
                // handle error
                Alert.alert("Error", "Ha ocurrido un error")
                console.log(error);
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.state.usersData && <ItemsList userData={this.state.usersData}/>}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
