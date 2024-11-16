import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({subtitle}) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Mdz Tech</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height: 150,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.azulOscuro,
        paddingTop:22
    },
    title:{
        fontSize:54,
        color:colors.blanco,
        fontFamily:'BebasNeue',
        fontStyle:'bold'
    },
    subtitle:{
      fontSize:24,
      color:colors.blanco,
      fontFamily:'BebasNeue',
      color:colors.blanco,
    }
})