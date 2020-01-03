import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import IonIcons from 'react-native-vector-icons/Ionicons'


export default function Controls({ styles, textStyles, label, onPressControl, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
      disabled={disabled}
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
    >
      <Text style={[styles, textStyles, { fontSize: 30, fontWeight: 'bold', color: '#212121' }]}>
        <IonIcons size={30} color="#2b2b2b" name={`md-arrow-drop${label === '<' ? 'left' : 'right'}`} />
      </Text>
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
