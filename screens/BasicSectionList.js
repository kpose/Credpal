import React, {Component} from 'react';
import { SectionList, StyleSheet, Text, View, Platform } from 'react-native';
import { sectionListData } from '../sectionListData';


class SectionListItem extends Component {
    render() {
        return (
            <View style= {{
                flexDirection: 'column',
                padding: 5,
            }}>
            <View style={{backgroundColor: '#e6f0e8', height:1, margin: 4, marginLeft: 20, marginRight: 10 }}></View>
              <Text style = {{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#000',
                  marginLeft: 10,
              }}> {this.props.item.name}

              </Text>
              <Text style = {{
                  fontSize: 15,
                  color: '#666b67',
                  marginLeft: 200,
              }}> {this.props.item.description}
              </Text>  
              
            </View>
        )
    }
}

class SectionHeader extends Component{
    render() {
        return (
            <View style = {{
                flex: 1,
                backgroundColor: 'rgb(77, 120, 140)',
            }}>
                <Text style ={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.section.title}

                </Text>
            </View>
        )
    }
}
export default class BasicSectionList extends Component {

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS==='ios' ? 34  :0 }} >
                <SectionList
                    renderItem = {({ item, index }) => {
                        return (<SectionListItem item={item} index={index}>

                        </SectionListItem>);
                    }}
                   
                    sections={sectionListData}
                    keyExtractor = {(item, index) => item.name}
                >

                </SectionList>
            </View>
        )
    }
}