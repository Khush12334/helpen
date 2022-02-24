import { Images, SVG } from '../../assets'

export const styles = {
  mainContain: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px'
  },
  mainMobile: {
    height: '100vh',
    width: '30%',
    // border: "1px solid black",
    borderRadius: '2%'
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10px',
    marginBottom: '10px'
  },
  menuIcon: {
    height: '25px',
    width: '25px',
    border: "0px solid black ",
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "1px 3px 5px rgb(158 158 158)"
  },
  headerTxt: {
    color: "#202561",
    fontSize: '25px'
  },
  well: {
    webkitBoxShadow: "1px 3px 1px #9E9E9E",
    mozBoxShadow: "1px 3px 1px #9E9E9E",
    boxShadow: "1px 3px 1px #9E9E9E"

  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollLeftView: {
    height: '130px',
    width: '100px',
    marginTop: '30px',
    backgroundImage: `url(${SVG.leftScrollView})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
  },
  scrollCenterView: {
    height: '160px',
    width: '160px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${SVG.centerScrollView})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  scrollRightView: {
    height: '130px',
    width: '100px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '30px',
    backgroundImage: `url(${SVG.rightScrollView})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  nearBackView: {
    height: '100%',
    // width: '100%',
    backgroundImage: `url(${Images.nearByView})`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  nearBackRing1: {

    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${Images.nearCircles})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: '40px',
    width: '80px',
    border: 'none',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

};