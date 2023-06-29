import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, Animated, ScrollView } from 'react-native';
import { styles } from './Home.styles';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { Colors, Fonts } from '../../constants';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import DoctorItem from '../../components/DoctorItem/DoctorItem';
import { getAllDoctor } from '../../redux/action/doctor.action';
import { useDispatch, useSelector } from 'react-redux';
import image from "../../../assets/images/Group1.png";
import image1 from "../../../assets/images/Group2.png";
import image2 from "../../../assets/images/Group3.png";
import image3 from "../../../assets/images/Group4.png";
import sadam from "../../../assets/images/sadam.png";
import giakhop from "../../../assets/images/giakhop.png";
import eye from "../../../assets/images/eye.png";
import cancer from "../../../assets/images/cancer.png";
import vitaminK from "../../../assets/images/VitaminK.png";
import gayte from "../../../assets/images/gayte.png";
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const categories = [
//   {
//     icon: (
//       <FontistoIcon name={'doctor'} size={24} color={Colors.DEFAULT_CORLOR} />
//     ),
//     name: 'Bác sỹ',
//     to: 'Doctor',
//   },
//   {
//     icon: (
//       <AntDesignIcon name={'adduser'} size={24} color={Colors.DEFAULT_CORLOR} />
//     ),
//     name: 'Lịch khám',
//     to: 'Appointment',
//   },
//   {
//     icon: (
//       <FontAwesome5Icon
//         name={'capsules'}
//         size={24}
//         color={Colors.DEFAULT_CORLOR}
//       />
//     ),
//     name: 'Đơn thuốc',
//     to: 'Pharmacy',
//   },
//   {
//     icon: (
//       <FontAwesomeIcon name={'user'} size={24} color={Colors.DEFAULT_CORLOR} />
//     ),
//     name: 'Cá nhân',
//     to: 'Profile',
//   },
// ];
// const doctors = [
//   {
//     id: 1,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 2,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 3,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 4,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 5,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 6,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 7,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 8,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 9,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
//   {
//     id: 10,
//     name: 'NVA',
//     department: 'Khoa Sản',
//     uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
//   },
// ];

const Home = ({ navigation: { navigate } }) => {
  const { listDoctor } = useSelector((state) => state.doctorSlice);
  const images = [image, image2, image3]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllDoctor());
  // }, []);
  // console.log(listDoctor, "listDoctor");



  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={[styles.userInfo, styles.spaceX]}>
        <Avatar circle source={require('../../../assets/images/avatar.png')} />
        <Text style={[styles.username, styles.spaceX]}>Suong Phan</Text>
      </View> */}
      {/* <View style={[styles.categories, styles.spaceX]}>
        {categories?.map((category, index) => {
          return (
            <View style={styles.category} key={index}>
              <Button
                title={category.icon}
                icon
                backgroundColor={Colors.GRAY}
                borderColor={Colors.GRAY}
                width={70}
                height={70}
                borderRadius={35}
                onPress={() => {
                  navigate(category.to);
                }}
              />
              <Text>{category.name}</Text>
            </View>
          );
        })}
      </View> */}
      {/* <View style={[styles.appointment, styles.spaceX, styles.spaceTop]}>
        <AppointmentItem
          id={1}
          name={'BS. Lương Thanh Long'}
          department={'Khoa ngoại'}
          date={'20/02/2023'}
          time={'9:00'}
        />
      </View> */}
      {/* <View style={[styles.list, styles.spaceX]}>
        <View style={styles.text}>
          <Text style={styles.colorText}>Bác Sỹ</Text>
        </View>
        <FlatList
          data={listDoctor}
          renderItem={item => <DoctorItem doctor={item.item} />}
          keyExtractor={item => item.id}
        />
      </View> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={images[currentIndex]} style={styles.image} />
          <View style={styles.containerHeader}>
            <View style={styles.itemContainer}>
              <View style={styles.itemIcon}>
                <Fontisto name='date' size={25} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={styles.textItemContainer}>Lịch hẹn</Text>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcons name='doctor' size={25} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={styles.textItemContainer}>Bác sĩ</Text>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcons name='account-multiple-outline' size={25} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={styles.textItemContainer}>Cộng đồng hỏi đáp bác sĩ</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.body}>
          <Text style={styles.titleBody}>Tin tức</Text>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={sadam} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>Hội chứng SADAM - Syndrome SADAM</Text>
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={giakhop} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>Giá khớp trong nha khoa - Dental Articulator</Text>
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={eye} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>10 phương pháp điều trị khô mắt tốt nhất</Text>
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={cancer} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>Các nhóm thuốc khác nhau điều trị ưng thư hắc tố da</Text>
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={vitaminK} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>Thực phẩm chứa vitamin K ảnh hưởng đến Warfarin như thế nào?</Text>
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.containerBodyItem}>
              <Image source={gayte} style={styles.containerBodyItemImgae} />
              <Text style={styles.containerBodyItemText}>Gây tê bề mặt trong nha khoa</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
