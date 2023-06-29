import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Badge, Surface, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './AppHeader.styles';
import { useNavigation } from '@react-navigation/native';

const IconSize = 24;
const LeftView = ({ menu, back, iconColor, backFunc }) => (
  <View style={styles.view}>
    {menu && (
      <TouchableOpacity onPress={() => { }}>
        <Feather name="menu" size={IconSize} color={iconColor} />
      </TouchableOpacity>
    )}
    {back && (
      <TouchableOpacity onPress={backFunc}>
        <Feather name="arrow-left" size={IconSize} color={iconColor} />
      </TouchableOpacity>
    )}
  </View>
);
const RightView = ({
  rightComponent,
  optionalBtn,
  optionalBtnPress,
  iconColor,
  optionalBadge,
  right,
  onRightPress,
}) =>
  rightComponent ? (
    rightComponent
  ) : (
    <View style={[styles.view, styles.rightView]}>
      {optionalBtn && (
        <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
          <Feather name={optionalBtn} size={IconSize} color={iconColor} />
          {optionalBadge && <Badge style={styles.badge}>{optionalBadge}</Badge>}
        </TouchableOpacity>
      )}
      {right && (
        <TouchableOpacity onPress={onRightPress}>
          <Feather name={right} size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
const TitleView = ({ iconColor, titleAlight, title }) => (
  <View style={styles.titleView}>
    <Title style={{ color: iconColor, textAlign: titleAlight, fontWeight: 'bold' }}>{title}</Title>
  </View>
);
const AppHeader = ({
  style,
  menu,
  back,
  title,
  right,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  rightComponent,
  headerBg,
  iconColor,
  titleAlight,
  optionalBadge,
}) => {
  const navigation = useNavigation();

  return (
    <Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
      <LeftView
        menu={menu}
        back={back}
        iconColor={iconColor}
        backFunc={() => navigation.goBack()}
      />
      <TitleView
        iconColor={iconColor}
        title={title}
        titleAlight={titleAlight}
      />
      <RightView
        iconColor={iconColor}
        onRightPress={onRightPress}
        optionalBadge={optionalBadge}
        optionalBtn={optionalBtn}
        optionalBtnPress={optionalBtnPress}
        right={right}
        rightComponent={rightComponent}
      />
    </Surface>
  );
};

export default AppHeader;
