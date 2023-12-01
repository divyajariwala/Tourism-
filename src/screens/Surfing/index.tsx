import React, { useEffect } from 'react';
import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { callApi } from '../../redux/apiService';
import { ActivitiesItem, ActivityItem } from '../../redux/interfaces';
import { RootState } from '../../redux/rootReducer';

import { useIsFocused, useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import UserIcon from '../../assets/image/profile.png';
import AppButtonComponent from '../../components/AppButtonComponent';
import GradientTextComponent from '../../components/GradientTextComponent';
import TitleComponent from '../../components/TitleComponent';
import TopNavBar from '../../components/TopNavBarComponent';
import TopSpotComponent from '../../components/TopSpotComponent';
import TravelGuideComponent from '../../components/TravelGuideComponent';
import {
  fetchActvitiesFailure,
  fetchActvitiesSuccess,
} from '../../redux/activities/actions';
import { styles } from './styles';
import NoDataComponent from '../../components/NoDataComponent';
import LoaderComponent from '../../components/LoaderComponent';

export default function SurfingScreen({ route }: { route: any }) {
  const activity_type = route.params?.screen;

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const activityData = useSelector<RootState, ActivityItem>(
    state => state.activitiesData,
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (isFocused) {
        callApi<ActivityItem>(
          `activities/${activity_type}`,
          fetchActvitiesSuccess,
          fetchActvitiesFailure,
          dispatch,
        );
      }
    });
    return unsubscribe;
  }, [isFocused, dispatch]);

  const handleTopSpotPress = (item: string) => {
    console.log(item, 'top spot pressed!');
  };

  const renderTopSpotItem = ({
    item,
    index,
  }: {
    item: ActivitiesItem;
    index: number;
  }) => (
    <TopSpotComponent
      index={`${index + 1}.`}
      title={item.name}
      onPress={() => handleTopSpotPress(item.name)}
    />
  );

  return (
    <View style={styles.mainContainerStyle}>
      {/* TopNavBar */}
      <TopNavBar
        title="Aloha"
      // onBackPress={handleButtonPress}
      />

        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scrollviewStyle}
          showsVerticalScrollIndicator={false}>
          {/* Image with text */}
          <View>
            <FastImage
              style={styles.imageStyle}
              source={{ uri: activityData.image }}>
              <GradientTextComponent title={activityData.name} />
            </FastImage>
          </View>

          {/* Description view */}
          <View style={{ backgroundColor: 'white' }}>
            <View style={styles.textContainerStyle}>
              <Text style={styles.descStyle}>{activityData.description}</Text>
            </View>

            {/* Header: Top spot view */}
            <View style={styles.wrapperViewStyle}>
              {/* Header: Top spot view */}
              <TitleComponent title="Top spots" />
              {/* Header: Top spot list */}
              <FlatList
                contentContainerStyle={{ paddingHorizontal: 16 }}
                data={activityData.activities}
                renderItem={renderTopSpotItem}
                ListEmptyComponent={NoDataComponent}
              />
            </View>
          </View>

          {/* Header: Travel Guide view */}
          <View style={[styles.wrapperViewStyle, { backgroundColor: '#E2F0F0' }]}>
            {/* Header: Travel Guide */}
            <TitleComponent title="Travel Guide" />
            {/* Header: Travel contact view */}
            <TravelGuideComponent
              title="Hadwin Malone"
              desc="Guide since 2012"
              image={UserIcon}
              onPress={() => console.log('Contact press')}
            />
          </View>
        </ScrollView>
        <View
          style={{
            marginHorizontal: 16,
            position: 'absolute',
            bottom: 16,
            width: Dimensions.get('window').width - 32,
          }}>
          <AppButtonComponent
            title="Book a trip"
            onPress={() => console.log('Book a trip clicked')}
          />
        </View>

    </View>
  );
}
