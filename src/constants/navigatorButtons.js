export const navigatorButtons = {
  admin: {
    rightButtons: [
      {
        id: 'logout',
        title: 'LOGOUT'
      }
    ]
  },
  creditors: {
    rightButtons: [
      {
        title: "Search",
        id: 'creditorsearch',
        icon: require('../assets/images/home.png'),
        showAsAction: 'ifRoom',
        buttonFontSize: 20,
        buttonFontWeight: '600',
        buttonFontSize: 20
      }
    ]
  },
  creditorsSearch: {
    leftButtons: [
      {
        id: 'exit',
        title: 'EXIT'
      }
    ]
  }
};