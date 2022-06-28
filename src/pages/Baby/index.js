import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/molecules/Header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  emojiGame,
  emojiGift,
  emojiLaunge,
  emojiMobile,
  emojiPizza,
  emojiTea,
  ICCalender,
  ICEmoji,
  ICPaper,
  ICPencil,
  ICPin,
  ICRight,
  ICRightBlack,
  ICRightBlue,
  ICRightOrange,
  ICRightRed,
  ICWeight,
} from '../../assets';
import {LineChart} from 'react-native-chart-kit';
import ItemEmoji from '../../components/molecules/ItemEmoji';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#011'}}
    style={{backgroundColor: '#fff', shadowColor: '#fff'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: '#011',
          backgroundColor: '#fff',
          fontWeight: '600',
          fontSize: 14,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Baby = () => {
  const Progress = () => {
    return <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
      <Text>Progress</Text>
    </View>;
  };

  const Articel = () => {
    return <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
      <Text>Articel</Text>
    </View>;
  };

  const screenWidth = Dimensions.get('window').width;
  let Image_Http_URL = {
    uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  };

  const Joyful = () => {
    alert('I am feeling Joyful');
  };

  const Happy = () => {
    alert('I am feeling Happy');
  };

  const Netural = () => {
    alert('I am feeling Netural');
  };

  const Stress = () => {
    alert('I am feeling Stress');
  };

  const Sad = () => {
    alert('I am feeling Sad');
  };

  const Sick = () => {
    alert('I am feeling sick');
  };

  const Tools = () => {
    const scrollA = useRef(new Animated.Value(0)).current;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingTop: 14,
          paddingHorizontal: 14,
          marginTop: 14,
        }}>
        <Animated.ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollA}}}],
            {useNativeDriver: true},
          )}
          scrollEventThrottle={16}
          >
          {/* TOOLS */}
          <View
            style={{
              backgroundColor: '#d1fae5',
              borderRadius: 18,
              paddingVertical: 24,
              overflow: 'hidden',
              marginBottom: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ICWeight width={20} height={20} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#011',
                    marginLeft: 6,
                  }}>
                  WEIGHT
                </Text>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#059669',
                    marginRight: 6,
                  }}>
                  See History
                </Text>
                <ICRight height={8} width={5} style={{top: 2}} />
              </TouchableOpacity>
            </View>
            <LineChart
              data={{
                labels: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Today'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={screenWidth} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#d1fae5',
                backgroundGradientFrom: '#d1fae5',
                backgroundGradientTo: '#d1fae5',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 153, 76, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#d1fae5',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                left: -35,
                width: 'auto',
              }}
              withHorizontalLabels={false}
              withHorizontalLines={false}
              withOuterLines={false}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 14,
              }}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: '500',
                  color: '#011',
                }}>
                15
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#011',
                  marginLeft: 6,
                  top: 7,
                }}>
                kg
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
                paddingBottom: 5,
              }}>
              <View>
                <Text style={{color: '#6b7280', fontWeight: '600'}}>
                  Update 2h ago
                </Text>
              </View>
              <TouchableOpacity>
                <ICPencil />
              </TouchableOpacity>
            </View>
          </View>

          {/* MOOD */}
          <View
            style={{
              backgroundColor: '#ffedd5',
              borderRadius: 18,
              paddingVertical: 24,
              overflow: 'hidden',
              marginBottom: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ICEmoji width={20} height={20} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#011',
                      marginLeft: 6,
                    }}>
                    MOOD
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#011',
                    marginTop: 6,
                  }}>
                  How are you feeling?
                </Text>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#d97706',
                    marginRight: 6,
                  }}>
                  See History
                </Text>
                <ICRightOrange height={8} width={5} style={{top: 2}} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ItemEmoji title="Joyful" emoji={emojiLaunge} onPress={Joyful} />
              <ItemEmoji title="Happy" emoji={emojiGame} onPress={Happy} />
              <ItemEmoji title="Netural" emoji={emojiPizza} onPress={Netural} />
              <ItemEmoji title="Stress" emoji={emojiMobile} onPress={Stress} />
              <ItemEmoji title="Sad" emoji={emojiGift} onPress={Sad} />
              <ItemEmoji title="Sick" emoji={emojiTea} onPress={Sick} />
            </ScrollView>
          </View>

          {/* UPDATE */}
          <View
            style={{
              backgroundColor: '#fee2e2',
              borderRadius: 18,
              paddingVertical: 24,
              overflow: 'hidden',
              marginBottom: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ICPin width={20} height={20} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#011',
                      marginLeft: 6,
                    }}>
                    UPDATE
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#dc2626',
                    marginRight: 6,
                  }}>
                  See History
                </Text>
                <ICRightRed height={8} width={5} style={{top: 2}} />
              </TouchableOpacity>
            </View>
            <View style={{padding: 14}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  padding: 14,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{maxWidth: '80%', top: -15}}>
                  <TextInput
                    placeholder="Add important note here..."
                    style={{color: '#011'}}
                  />
                </View>
                <TouchableOpacity>
                  <ICPaper height={40} width={40} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* APPOINTMENT */}
          <View
            style={{
              backgroundColor: '#e0f2fe',
              borderRadius: 18,
              paddingVertical: 24,
              overflow: 'hidden',
              marginBottom: 24,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ICCalender width={20} height={20} />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#011',
                      marginLeft: 6,
                    }}>
                    APPOINTMENT
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginRight: 6,
                  }}>
                  See All
                </Text>
                <ICRightBlue height={8} width={5} style={{top: 2}} />
              </TouchableOpacity>
            </View>
            <View style={{padding: 14}}>
              <View
                style={{backgroundColor: '#fff', borderRadius: 8, padding: 14}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#011'}}>
                  Fri, 8 Jun{' '}
                  <View
                    style={{
                      width: 4,
                      height: 4,
                      backgroundColor: '#011',
                      borderRadius: 50 / 2,
                      top: -5,
                      position: 'relative',
                    }}
                  />{' '}
                  09:00
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{maxWidth: '70%', marginTop: 4}}>
                    <Text style={{fontSize: 14, color: '#9ca3af'}}>
                      Athenatal Visit with Dr. Lukman Adi Saputra
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <ICRightBlack
                      height={8}
                      width={5}
                      style={{top: -4, marginRight: 10}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 14,
              }}>
              <View
                style={{
                  width: 3,
                  height: 3,
                  borderRadius: 50 / 2,
                  backgroundColor: '#6b7280',
                }}
              />
              <Text style={{fontSize: 12, color: '#6b7280', marginLeft: 4}}>
                2 more appointments
              </Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    );
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: '1', title: 'Progress'},
    {key: '2', title: 'Articel'},
    {key: '3', title: 'Tools'},
  ]);

  const renderScene = SceneMap({
    1: Progress,
    2: Articel,
    3: Tools,
  });

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor="#f97316" />
      <Header />
      <View style={styles.container}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Baby;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
});
