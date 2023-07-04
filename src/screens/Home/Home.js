import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';
import image from "../../assets/images/Group1.png";
import image1 from "../../assets/images/Group2.png";
import image2 from "../../assets/images/Group3.png";
import image3 from "../../assets/images/Group4.png";
import sadam from "../../assets/images/sadam.png";
import giakhop from "../../assets/images/giakhop.png";
import eye from "../../assets/images/eye.png";
import cancer from "../../assets/images/cancer.png";
import vitaminK from "../../assets/images/VitaminK.png";
import gayte from "../../assets/images/gayte.png";
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constants';


const Home = ({ navigation: { navigate } }) => {
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
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigate("Doctor")}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcons name='doctor' size={25} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={styles.textItemContainer}>Bác sĩ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer} onPress={() => navigate("Speciality")}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcons name='account-multiple-outline' size={25} color={Colors.DEFAULT_CORLOR} />
              </View>
              <Text style={styles.textItemContainer}>Danh sách chuyên khoa</Text>
            </TouchableOpacity>
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
