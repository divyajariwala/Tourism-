import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BannerImage from '../../assets/image/home-image.png';
import UserIcon from '../../assets/image/profile.png';
import AppButtonComponent from '../../components/AppButtonComponent';
import CategoriesComponent from '../../components/CategoriesComponent';
import GradientTextComponent from '../../components/GradientTextComponent';
import HighlightsComponent from '../../components/HighlightsComponent';
import TitleComponent from '../../components/TitleComponent';
import TopNavBar from '../../components/TopNavBarComponent';
import TravelGuideComponent from '../../components/TravelGuideComponent';
import {
  fetchHighlightsFailure,
  fetchHighlightsSuccess,
} from '../../redux/highlight/actions';
import { RootState } from '../../redux/rootReducer'; // Assuming you have a root reducer

// import {HighlightItem} from '../../redux/types';
import { callApi } from '../../redux/apiService';
import {
  fetchCategoryFailure,
  fetchCategorySuccess,
} from '../../redux/category/actions';
import { CategoryItem, HighlightItem } from '../../redux/interfaces';
import { styles } from './styles';
import NoDataComponent from '../../components/NoDataComponent';
import { startLoading, stopLoading } from '../../redux/loader/actions';
import LoaderComponent from '../../components/LoaderComponent';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const highlightsData = useSelector<RootState, HighlightItem[]>(
    state => state.userDataArray,
  );
  const categoriesData = useSelector<RootState, CategoryItem[]>(
    state => state.categoryDataArray,
  );

  useEffect(() => {

    callApi<HighlightItem[]>(
      'highlights',
      fetchHighlightsSuccess,
      fetchHighlightsFailure,
      dispatch,
    );

    callApi<CategoryItem[]>(
      'categories',
      fetchCategorySuccess,
      fetchCategoryFailure,
      dispatch,
    );

  }, [dispatch]);

  const handleCategoryPress = (item: string) => {
    console.log(item, 'category pressed!');
  };

  const renderCategorytItem = ({ item }: { item: CategoryItem }) => (
    <CategoriesComponent
      title={item.name}
      onPress={() => handleCategoryPress(item.name)}
    />
  );

  const renderHighlightItem = ({ item }: { item: HighlightItem }) => (
    <HighlightsComponent
      title={item.title}
      desc={item.description}
      image={item.image}
      onPress={() => {
        switch (item.title) {
          case 'Surfing':
            navigation.navigate('Surfing', { screen: item.title });
            break;
          case 'Traditional Festivals':
            navigation.navigate('Hula', { screen: 'Traditional Festivals' });
            break;
          case 'Volcanoes':
            navigation.navigate('Vulcano', { screen: 'Volcanoes' });
            break;
          default:
            break;
        }
      }}
    />
  );

  return (
    <View style={styles.mainContainerStyle}>
      {/* TopNavBar */}
      <TopNavBar
        title="Aloha"
      // onBackPress={handleButtonPress}
      />

      {highlightsData.length === 0 && categoriesData.length === 0 ? <LoaderComponent /> : <>
        {/* ScrollView */}
        <ScrollView
          contentContainerStyle={styles.scrollviewStyle}
          showsVerticalScrollIndicator={false}>
          {/* Image with text */}
          <View style={styles.imageContainerStyle}>
            <ImageBackground style={styles.imageStyle} source={BannerImage}>
              <GradientTextComponent title={'Welcome\nto Hawaii'} />
            </ImageBackground>
          </View>

          {/* Header: Highlights view */}
          <View style={[styles.wrapperViewStyle, { backgroundColor: 'white' }]}>
            {/* Header: Highlights */}
            <TitleComponent title="Highlights" />
            {/* Highlights horizontal list */}
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 16 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={highlightsData}
              renderItem={renderHighlightItem}
              ListEmptyComponent={NoDataComponent}
              ItemSeparatorComponent={() => {
                return <View style={{ width: 16 }}></View>;
              }}
            />
          </View>

          {/* Header: Categories view */}
          <View
            style={[
              styles.wrapperViewStyle,
              { backgroundColor: '#E2F0F0', paddingBottom: 0 },
            ]}>
            {/* Header: Categories list */}
            <TitleComponent title="Categories" />
            <FlatList
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={categoriesData}
              renderItem={renderCategorytItem}
              ListEmptyComponent={NoDataComponent}
              ItemSeparatorComponent={() => {
                return <View style={{ height: 8 }}></View>;
              }}
            />
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

          {/* Booking trip button */}
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
      </>}
    </View>
  );
}
