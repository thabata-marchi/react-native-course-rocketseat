import { StatusBar, Platform } from 'react-native';

if(Platform.OS === 'android') StatusBar.setBackgroundColor('#DA552F');
StatusBar.setBarStyle('light-content');